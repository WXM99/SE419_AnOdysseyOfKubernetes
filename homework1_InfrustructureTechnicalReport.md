#  Technical Report On Computer Infrustructure

## CPU

CPU全称是"Central processing unit",主要承担的任务是以特定指令集执行计算机程序的算数，逻辑或者控制指令

CPU包括Control Unit，Arithmetic logic unit，Address generation unit，Memory management unit，Cache等部分

### 制造商

* Intel
* AMD

世界上top2的CPU制造商是Intel与AMD两家，在桌面CPU的市场被这两家公司独占，在cpubenchmark给出的统计中说到：“We do receive a small number of submissions of CPU types other than AMD and Intel however the percentage is so small as to make it not worth graphing”，其中Intel的市场份额约占7成，AMD约占3成

此外，还有其他的CPU制造商只出售CPU设计，比如ARM，MIPS

另外，现在智能手机上使用的芯片通常不被称作CPU，而是SoC（System on a chip），主要的公司有Apple，高通，华为海思等。这种芯片可以集成比如射频信号处理模块，模拟数字信号处理模块等；

### CPU指标

- 内核数

    内核数表示单个计算组件（裸芯片或芯片）中的独立中央处理器的数量

    一般情况下，内核数越多，性能越强

    现在Intel core系列处理器常见的有4,6,8内核，Xeon系列处理器有32个内核以上的内核数
- 线程数

    线程或执行线程是一个软件术语，指代那些可由单核 CPU 传递或处理的基本有序指令序列。

    CPU支持的线程数越多，说明它的性能越强。
    
    一般一个内核对应一个线程，不过超线程技术可以使核心数与线程数形成1:2的关系。

- 处理器基本频率

    处理器基本频率又称“时钟频率”或“主频”，是指处理器晶体管打开和关闭的速率。主频的单位是MHz或GHz，意思是CPU每秒跑几「百万次」（MHz）或「十亿次」（GHz）。作用主频是比较在同一系列内的芯片性能的唯一方法。CPU内部是一个个的运算单元，像小型计算器那样可以算一些加减乘除，而所谓的「跑一次」，就是CPU内部所有单元做一次动作，执行某些运算，2GHz的CPU就代表它可以每秒做20亿次的动作。
    
    因此主频越高，数字越大，执行的速度就越快，而这也是划分同代CPU产品定位的第一标准

    目前市场上常见的高性能处理器最大主频在4-5GHz之间，最高的主频来自AMD的一款CPU，达到了8.732GHz（As of 2014, the Guinness World Record for the highest CPU clock rate is an overclocked, 8.723 GHz AMD Piledriver-based FX-8370 chip.）

- 缓存

    根据ICS课上所学，为了支持memory hierarchy，CPU有告诉SRAM缓存，一般情况下，性能越好的处理器需要的cache也就越大

- 制程

    又常被称作光刻，指用于生产集成电路的半导体技术，采用纳米 (nm) 为计算单位，可表示半导体上设计的功能的大小。

    目前桌面级cpu制程在10nm，下一步的目标是7nm；在手机处理器上已经有小于10nm制程的芯片


- TDP-thermal design power

    热设计功耗（英语：Thermal Design Power，缩写 TDP，又译散热设计功率）的含义是当芯片达到最大负荷的时候〔单位为瓦（W）〕热量释放的指针，是计算机的冷却系统必须有能力驱散热量的最大限度，但不是芯片释放热量的功率。在其他参数相同的情况下，TDP越低表示该CPU发热更低，效率越高。

### 技术
- instruction pipeline
- multithreading
- parallelism
- virtualization
- Intel® Turbo Boost Technology 2.0

### others
- Intel的Tick-Tock

    Tick-Tock是Intel公司发展微处理器芯片设计制造业务的一种发展战略模式，“Tick-Tock”的名称源于时钟秒针行走时所发出的声响。Intel指，每一次“Tick”代表着一代微架构的处理器芯片制程的更新，意在处理器性能几近相同的情况下，缩小芯片面积、减小能耗和发热量；而每一次“Tock”代表着在上一次“Tick”的芯片制程的基础上，更新微处理器架构，提升性能。一般一次“Tick-Tock”的周期为两年，“Tick”占一年，“Tock”占一年。

    由于这种独特的产品升级方式，被网友戏称“挤牙膏”。

### references
* https://www.cpubenchmark.net/market_share.html
* https://en.wikipedia.org/wiki/List_of_computer_hardware_manufacturers
- https://en.m.wikipedia.org/wiki/Clock_rate
- https://en.wikipedia.org/wiki/System_on_a_chip
- https://www.intel.cn/content/www/cn/zh/architecture-and-technology/turbo-boost/turbo-boost-technology.html?_ga=1.147059508.281579711.1486467137


## Memory



## Storage



## Network



## xPU