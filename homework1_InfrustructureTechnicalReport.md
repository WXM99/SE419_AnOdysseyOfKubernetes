#  Technical Report On Computer Infrustructure

## CPU



## Memory



## Storage



## Network

### 0. OSI 7-Layer Network Module

> Open System Interconnection/Reference Model

1. Physics Layer
2. Data Link Layer
3. Network Layer
4. Transport Layer
5. Session Layer
6. Presentation Layer
7. Application Layer

其中第四层完成数据传送服务，上面三层面向用户。每一层中都要自己的专属协议，完成自己相应的工作以及与上下层级之间进行沟通。

### 1.  Physical Layer

激活、维持、关闭通信端点之间的机械特性、电气特性、功能特性以及过程特性。该层为上层协议提供了一个传输数据的可靠的物理媒体。简单的说，物理层确保原始的**数据可在各种物理媒体上传输**。

#### 1.1 Transmission Media

可分为两大类: 即导引型传输媒体（双绞线，同轴电缆，光纤）和非导引型传输媒体（无线，红外，大气激光）

![PastedGraphic](./homework1_InfrustructureTechnicalReport.assets/PastedGraphic.png)

#### 1.2 Repeater

中继器主要功能是通过对数据信号的重新发送或者转发，来扩大网络传输的距离。

![Image](homework1_InfrustructureTechnicalReport.assets/Image.jpg)

#### 1.3 Concentrator

集线器的主要功能是对接收到的信号进行再生整形放大，以扩大网络的传输距离，同时把所有节点集中在以它为中心的节点上。集线器每个接口简单的收发比特，收到1就转发1，收到0就转发0，不进行碰撞检测。

![Image](homework1_InfrustructureTechnicalReport.assets/Image-0552589.jpg)

### Data Link Layer

数据链路层在物理层提供的服务的基础上向网络层提供服务，其最基本的服务是将源自网络层来的数据可靠地传输到相邻节点的目标机网络层。

该层的作用包括：**物理地址寻址、数据的成帧、流量控制、数据的检错、重发等**。

#### 2.1 Frame

将数据组合成数据块，在数据链路层中称这种数据块为帧（frame），帧是数据链路层的传送单位

#### 2.2 Ethernet Protocol



#### 2.3 Bridge



#### 2.4 Switchboard



### 3. Network Layer

网络层的目的是实现两个端系统之间的数据透明传送，具体功能包括寻址和路由选择、连接的建立、保持和终止等。它提供的服务使传输层不需要了解网络中的数据传输和交换技术。即**路径选择、路由及逻辑寻址**。

网络层负责对子网间的数据包进行路由选择。此外，网络层还可以实现拥塞控制、网际互连等功能；基本数据单位为**IP**数据报.

#### 3.1 Protocols

- IP协议（Internet Protocol，因特网互联协议)
- ICMP协议（Internet Control Message Protocol，因特网控制报文协议）
- ARP协议（Address Resolution Protocol，地址解析协议）
- RARP协议（Reverse Address Resolution Protocol，逆地址解析协议）

#### 3.2 Router

router

- RIP
- OSPF

### 4. Transport Layer

第一个端到端，即主机到主机的层次。传输层负责将上层数据分段并提供端到端的、可靠的或不可靠的传输。此外，传输层还要处理端到端的差错控制和流量控制问题。 

传输层负责将上层数据分段并提供端到端的、可靠的或不可靠的传输以及端到端的差错控制和流量控制问题.

#### 4.1 Protocols

- TCP
- UDP

### 5. 会话层

会话层管理主机之间的会话进程，即负责建立、管理、终止进程之间的会话。会话层还利用在数据中插入校验点来实现数据的同步。

### 6 表示层

表示层对上层数据或信息进行变换以保证一个主机应用层信息可以被另一个主机的应用程序理解。表示层的数据转换包括数据的加密、压缩、格式转换等。

### 7. 应用层

为操作系统或网络应用程序提供访问网络服务的接口。

#### Protocols

**FTP**（文件传送协议）

**Telnet**（远程登录协议）

**DNS**（域名解析协议）

**SMTP**（邮件传送协议）

**POP3**协议（邮局协议）

**HTTP**协议（**Hyper Text Transfer Protocol**）

## xPU
