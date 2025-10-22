'use client'

const painPoints = [
  {
    id: 1,
    title: 'Low Efficiency Human Document Understanding',
    description: 'Manual extraction of system components and interfaces from technical documentation, taking 1-2 weeks per project with significant risk of missing critical information.'
  },
  {
    id: 2,
    title: 'Individual Knowledge Limitation',
    description: 'Reliance on subjective brainstorming for threat identification, leading to inconsistent analysis results and limited ISO/SAE 21434 requirements coverage between different engineers.'
  },
  {
    id: 3,
    title: 'product to market time',
    description: '3-6 month project cycles for medium to complex vehicle TARA analysis, costing hundreds of thousands in labor and frequently delaying vehicle launch timelines.'
  },
  {
    id: 4,
    title: 'Knowledge Reusability',
    description: 'Up to 70% duplicate work across projects as legacy TARA reports in PDF format cannot be effectively reused during system iterations or upgrades.'
  }
]

const solutions = [
  {
    id: 1,
    title: 'AI Document Processing Engine',
    description: [
      'Interactive and editable data flow diagrams generated from uploaded documentation',
      'Local deployment with fine-tuned LLMs for secure processing of confidential documents'
    ]
  },
  {
    id: 2,
    title: 'Intelligent Threat Matching System',
    description: [
      '5,000+ pre-built automotive threat scenarios across 400+ vehicle components',
      'Automated threat scenario matching with component assets'
    ]
  },
  {
    id: 3,
    title: 'AI-Driven Risk Assessment Engine',
    description: [
      'Automated attack tree modeling for visualizing potential attack paths',
      'Real-time risk calculation combining CVSS 4.0 with automotive-specific scoring'
    ]
  },
  {
    id: 4,
    title: 'Enterprise Security Knowledge Platform',
    description: [
      'Intelligent activation of historical TARA documents into structured data flows and component lists',
      'Threat-Asset-Countermeasure" knowledge graph for seamless cross-project knowledge transfer'
    ]
  }
]

export default function ThirdScreen() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Product value proposition</h2>

          {/* 客户痛点 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-600 mb-8 text-left">
              4 Critical Pain Points in Traditional TARA Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((point) => (
                <div
                  key={point.id}
                  className="bg-white rounded-lg p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-2">{point.title}</h4>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 解决方案 */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-8 text-left">
              AIcanTARA Solution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <div 
                  key={solution.id} 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-blue-600 text-2xl font-bold">{solution.id}</span>
                    <h4 className="text-lg font-medium">{solution.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {solution.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}