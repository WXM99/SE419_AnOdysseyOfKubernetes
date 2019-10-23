# Omega

## introduction
传统的集中式集群调度器扩展性和响应速度都比较差，降低效率，资源利用率以及影响集群的扩展

新的实现方式利用共享状态(shared state)以及(lock-free optimistic concurrency control)

工作条件是在真实的Google的工作负载下进行的

对于一个集群来说，造价通常是昂贵的，所以要最大限度的利用，可以提高效率和资源利用率的方法是，把一系列的CPU密集型与Memory密集型任务放在一台机器上，把各种大型小型的任务，batch和低延迟的任务放在一起，但是这样做就给了调度系统很大的麻烦，一般的任务分配是与集群大小相关的，越大的集群需要的调度算法也就越复杂，这样，系统的可扩展性就会收到很大的限制，因为每次扩展系统就要重新写调度算法

![](./img/1.png)

two-level的集群调度可以满足一部分扩展性的要求，但是这个加锁与局部算法导致对于一些需要有全局状态才能更好分配的任务来说，这个架构做的并不好

## workload

- cluster A: medium-size, fairly busy
- cluster B: larger size, in use at Google
- cluster C: a published example

job分为batch与service

三个集群的workload都是，job数batch占绝大多数，但是大部分资源花费在service上

service的运行时间长，并且task的数量也少于batch

![](./img/2.png)
![](./img/3.png)

## taxonomy(分类)

详细介绍了figure 1中的三种scheduler的工作特点

![](./img/4.png)

## design comparison

### simulators

two simulators
- lightweight simulator
- high-fidelity simulator

简化的模拟器
- 模拟的数据
- 两种类型的任务：batch&service
- 每个job最多尝试分配1000次

### metrics

#### T decision

tdecision = tjob + ttask × tasks per job

#### job arrival rate

#### job wait time 

从job到达集群到开始运行的时间

在多个job到达调度器时，调取器把这些任务放入一个queue中，当job数变多时，job会进入queue，并且调度器执行调度算法的时间也会变长

#### scheduler busyness

It increases with the per-job decision time, and, in the shared-state approach, if scheduling work must be redone because of conflicts

#### conflict fraction

Denotes the average number of conflicts per successful transaction. 

A value of 0 means no conflicts took place; a value of 3 indicates that the average job experiences three conflicts, and thus requires four scheduling attempts

#### error bars

indicate how much variation exists across days in the experiment: they show the median absolute deviation (MAD) from the median value of the per-day averages

![](./img/6.png)
![](./img/5.png)

### monothlithic schedulers

- single-path

![](./img/5a.png)
![](./img/6a.png)

对于single-path的中心式调度器来说在job的执行时间一定范围内，调度器的busyness和等待时间都是成线性上升的，但是到了调度器工作负载饱和以后，等待时间大幅上升

对于batch job和service job来说，两者调度花费的时间差不多相同

- multi-path

![](./img/5b.png)
![](./img/6b.png)

针对batch job做出优化的multi-path版本，可以看出batch的调度时间有了很大的加快，但还是会出现一些batch被long service阻塞住的情况

### Two-level scheduling: Mesos

一个资源管理节点和两套调度框架，一套专门调度batch job，另一套专门调度service job

由于mesos独特的保障公平性的算法，在处理batch job时，由于service讲一些资源锁住，所以导致一些batch job在尝试1000次之后还是没有费配到合适的资源，mesos对一些小规模job，对所有资源都利用的job效果比较好
![](./img/7.png)

### Shared-state scheduling: Omega

![](./img/5c.png)
![](./img/6c.png)

可以看出与中心式的调度相比，Omega的效果还是非常好的，对于两种类型的job，调度器都可以分别进行调度而不会出现卡死的情况；

在验证Omega系统的可扩展性的时候，可以通过增加job arrival rate来观察系统的可扩展性

![](./img/8.png)
![](./img/9.png)

从figure 8中可以看出，两种job的影响；

batch job主要是高强度的任务，而service job主要是冲突变多

扩展性的瓶颈还在batch job，在单独对batch job的测试中，从figure 9可以看出在提高batch job的数量时确实冲突变多，但是系统也能够扩充至少32倍

![](./img/10.png)

Omega的特点

- 扩展性强
- 支持独立的调度器实现
- 可以暴露整个集群资源的情况

## Trace-driven simulation