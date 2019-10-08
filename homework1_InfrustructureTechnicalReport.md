#  Technical Report On Computer Infrustructure

## CPU

cpu性能衡量标准： 核心数，频率，缓存，架构

常见品牌：龙芯，酷睿，锐龙，骁龙

intel的i3,i5,i7代表性能的高低,后面的一开始的数字代表第几代,后三位代表在当代cpu的性能,性能越强数字越大。
如"core i5-8100"

如今酷睿系列已经出到第十代，使用Ice Lake架构，特点稳定功耗低，单核处理能力强。

![](./img-wxr/1.jpeg)


锐龙系列则推出锐龙9，AMD 锐龙 9 3950X有16核32线程，超频达到4.7GHz

对比intel和amd，两个系列中前者单核处理能力强于后者，更适合游戏本，amd更支持超频，且线程数多，耗电多，价格较低，适合做adobe系列的媒体处理软件的cpu，视频剪辑与渲染等专业软件有专业算法提高多线程的利用效率，线程多的锐龙更占优势。

## Memory

衡量标准: 容量, 频率, 延迟(时序)

常见内存条品牌:金士顿, 三星, 威刚

内存最关键的是内存芯片(内存颗粒,三星、镁光、海力士等为主要生产厂家)

一般ddr3的4G或8G内存条已经足够个人使用，双通道可以提高一倍速率。

内存频率并非一味的越快越好，需要和主板契合，一般主板会限制在2133MHz或2400MHz，可以通过BIOS调整参数改变默认频率。

在相同频率下，延迟越低的在超频时表现越好。

## Storage

衡量标准：容量, 带宽

硬盘分为固态硬盘、机械硬盘和混合硬盘

机械硬盘与固态硬盘优缺点对比：

机械硬盘价格低，容量大，寿命长

固态硬盘性能更优，功耗低，体型小，散热快

混合硬盘则是处于机械硬盘和固态硬盘中间的一种解决方案

## Network

衡量标准：传输效率、稳定性、端口数量、支持协议、安全性等

品牌：华硕、腾达、华为、普联等

路由转发方式有软件方式与硬件转发。软件方式一般采用的是集中式路由，硬件转发可分成集中式与分布式的硬件转发方式，后者是新一代网络的代表。

无线路由器有WAN口和LAN口,wifi有2.4G和5G两种，有的支持双频合一

前者每根天线的传输速率为150Mbps，速度慢，信号弱，延迟大但穿墙能力强

后者每根433Mbps，速度快信号强，延迟小但穿墙能力差。

初始的路由器的信号需要排队，mimo技术可以帮助多根天线同时传输，但是要求接收者也有多根接收天线，mu-mimo技术可以实现多天线并发，但还不太成熟。

wifi信号强度则与发射功率和天线增益有关。

路由器内部有cpu、内存等，其算法也会影响效果，若信号强而网速慢则可能是路由器算法的问题。

## xPU

### GPU

衡量标准：GPU架构、核心频率、流处理器(CUDA)数量、显存、显存类型、显存位宽、显存频率等

常见品牌：AMD Nvidia

N卡效率高，功耗高；A卡理论效率高，但实际效率不如N卡，功耗低。所以坊间流传一段话，游戏选N卡，工作选A卡。

一般频率高、流处理器数量多的较优。

显存大、位宽大、显存频率高、分辨率高则强，相仿的则可以选择带宽大的(频率乘位宽)。

### TPU

TODO

### NPU

TODO

### XPU

据不完全统计，已经被用掉的有：

APU -- Accelerated Processing Unit, 加速处理器，AMD公司推出加速图像处理芯片产品。

BPU -- Brain Processing Unit, 地平线公司主导的嵌入式处理器架构，并应用于器ADAS产品中。

CPU -- Central Processing Unit 中央处理器， 目前PC core的主流产品。

DPU -- Dataflow Processing Unit 数据流处理器， Wave Computing 公司提出的AI架构；Data storage Processing Unit，深圳大普微的智能固态硬盘处理器。

FPU -- Floating Processing Unit 浮点计算单元，通用处理器中的浮点运算模块。

GPU -- Graphics Processing Unit, 图形处理器，采用多线程SIMD架构，虽然为图形处理而生，但在Nvidia的人工智能布局下，成为了人工智能算法的主要硬件选项。

HPU -- Holographics Processing Unit 全息图像处理器， 微软出品的全息计算芯片与设备。

IPU -- Intelligence Processing Unit， Deep Mind投资的Graphcore公司出品的AI处理器产品。

MPU/MCU -- Microprocessor/Micro controller Unit， 微处理器/微控制器，一般用于低计算应用的RISC计算机体系架构产品，如ARM-M系列处理器。

NPU -- Neural Network Processing Unit，神经网络处理器，是基于神经网络算法与加速的新型处理器总称，如中科院计算所/寒武纪公司出品的diannao系列。

RPU -- Radio Processing Unit, 无线电处理器， Imagination Technologies 公司推出的集合集Wifi/蓝牙/FM/处理器为单片的处理器。

TPU -- Tensor Processing Unit 张量处理器， Google 公司推出的加速人工智能算法的专用处理器。目前一代TPU面向Inference，二代面向训练。

VPU -- Vector Processing Unit 矢量处理器，Intel收购的Movidius公司推出的图像处理与人工智能的专用芯片的加速计算核心。

WPU -- Wearable Processing Unit， 可穿戴处理器，Ineda Systems公司推出的可穿戴片上系统产品，包含GPU/MIPS CPU等IP。

XPU -- 百度与Xilinx公司在2017年Hotchips大会上发布的FPGA智能云加速，含256核。

ZPU -- Zylin Processing Unit, 由挪威Zylin 公司推出的一款32位开源处理器。