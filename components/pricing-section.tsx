"use client"

import { motion } from "framer-motion"
import { Activity, Clock3, Cpu, Server, ShieldCheck, Sparkles, Users } from "lucide-react"
import { useState } from "react"

const overviewMetrics = [
  {
    title: "SLA服务可用率",
    icon: ShieldCheck,
    currentValue: "99.9%",
    historyValue: "99.7%",
    description: "面向服主的公益节点持续在线，状态公开可查。",
    highlights: ["实时状态页", "自动告警监控", "异常可追溯"],
    popular: false,
    cta: "查看运行状态",
  },
  {
    title: "资源负载",
    icon: Cpu,
    currentValue: "16.68%",
    historyValue: "18.02%",
    description: "CPU、内存与峰值负载保持健康区间，保障高峰可用。",
    highlights: ["CPU 使用率 7.95%", "峰值负载可视化", "容量规划参考"],
    popular: true,
    cta: "查看资源面板",
  },
  {
    title: "社区规模",
    icon: Users,
    currentValue: "5000+",
    historyValue: "2022 起",
    description: "从 2022 年持续运营，沉淀活跃服主社群与协作反馈机制。",
    highlights: ["长期公益运营", "QQ 群互助交流", "需求驱动迭代"],
    popular: false,
    cta: "加入社区交流",
  },
]

const quickStats = [
  { label: "累计运行时长", value: "30,000+ 小时", icon: Clock3 },
  { label: "在线节点", value: "24 / 7 监控", icon: Server },
  { label: "数据更新", value: "分钟级同步", icon: Activity },
]

export function PricingSection() {
  const [showHistory, setShowHistory] = useState(false)

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">核心数据</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            一眼了解蓝天云公益项目
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            用三组关键指标快速看懂项目健康度、承载能力与社区活力，判断是否值得长期托管。
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm w-fit mx-auto"
          >
            <button
              onClick={() => setShowHistory(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !showHistory ? "bg-[#e78a53] text-white shadow-lg" : "text-white/60 hover:text-white/80"
              }`}
            >
              当前数据
            </button>
            <button
              onClick={() => setShowHistory(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                showHistory ? "bg-[#e78a53] text-white shadow-lg" : "text-white/60 hover:text-white/80"
              }`}
            >
              历史数据
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                近 3 个月
              </span>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {overviewMetrics.map((metric, index) => {
            const Icon = metric.icon
            const metricValue = showHistory ? metric.historyValue : metric.currentValue

            return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                metric.popular
                  ? "bg-gradient-to-b from-[#e78a53]/10 to-transparent border-[#e78a53]/30 shadow-lg shadow-[#e78a53]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {metric.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    重点关注
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 bg-[#e78a53]/15 border border-[#e78a53]/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#e78a53]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{metricValue}</div>
                <p className="text-white/60 text-sm leading-relaxed">{metric.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {metric.highlights.map((highlight, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#e78a53] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  metric.popular
                    ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {metric.cta}
              </motion.button>
            </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10"
        >
          {quickStats.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/50">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">想继续深入了解？可查看实时监控、参与社区讨论，或直接进入控制台体验。</p>
          <motion.a
            href="https://next.lantian.pro/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#e78a53] hover:text-[#e78a53]/80 font-medium transition-colors"
          >
            前往蓝天云官网 →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
