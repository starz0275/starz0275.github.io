import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'No.1：C/C++ & 计算机基础',
    // 暂时沿用默认图片，你可以以后自己替换
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        深入理解<b>C 语言</b>指针与内存管理。结合<b>计算机组成原理</b>，打好数据结构与算法基础。辅以 C++ 面向对象思想。
      </>
    ),
  },
  {
    title: 'No.2：STM32 & 外设',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        理解 Cortex-M 内核架构。熟练掌握 <b>STM32</b> 的 GPIO、定时器、中断、DMA、通讯接口（UART/I2C/SPI）等外设驱动开发。
      </>
    ),
  },
  {
    title: 'No.3：RTOS 与 Linux 驱动',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        从裸机迈向操作系统。移植与应用 <b>FreeRTOS</b>，理解多任务调度。进阶挑战 <b>Linux 驱动开发</b>，掌握内核模块与设备树。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
