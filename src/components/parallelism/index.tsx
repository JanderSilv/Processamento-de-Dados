// deps
import React from 'react'

// components
import { Card } from './components'

// utils
import { colors } from './utils'

// styles
import { Container, Header, Title, Text, I, U, B, ProcessorImage, Cards, Navigator, NavItem } from './styles'

// constants
import { expandedSubjects, subjectColors } from './constants'

// assets
import { flynn, cpuCores, concorrencia, bannerGPU_vs_CPU } from './assets'

// enums
import { Subjects } from './enums'

export function ParallelismSection() {
  const [currentSubject, setCurrentSubject] = React.useState<Subjects>()

  function closeSubject() {
    setCurrentSubject(undefined)
  }

  function openFlynnsTaxonomySubject() {
    setCurrentSubject(Subjects.FLYNNS_TAXONOMY)
  }

  function openParalelismEConcurrentSubject() {
    setCurrentSubject(Subjects.PARALLELISM_VS_CONCURRENCE)
  }

  function openWhenToUseParallelismSubject() {
    setCurrentSubject(Subjects.WHEN_TO_USE_PARALLELISM)
  }

  function openCPU_vs_GPU(){
    setCurrentSubject(Subjects.CPU_VS_GPU)
  }

  function renderSubjectsNavigator() {
    if (!currentSubject) return null

    return (
      <Navigator>
        {Object.entries(subjectColors).map(([subject, color], index) => (
          <NavItem
            key={index}
            active={subject === currentSubject}
            color={colors.background[color].normal}
            onClick={() => setCurrentSubject(subject as Subjects)}
          />
        ))}
      </Navigator>
    )
  }

  function renderBody() {
    if (!currentSubject)
      return (
        <Cards>
          <Card
            color={colors.background.orange.normal}
            banner={flynn}
            title="Taxonomia de Flynn"
            subtitle="Como classificar as arquiteturas?"
            onClick={openFlynnsTaxonomySubject}
          />
          <Card
            color={colors.background.green.normal}
            banner={concorrencia}
            title="Paralelismo vs Concorrência"
            subtitle="São a mesma coisa?"
            onClick={openParalelismEConcurrentSubject}
          />
          {/* @todo - adicionem seus cards aq, companheiros */}
          <Card
            color={colors.background.purple.normal}
            banner={cpuCores}
            title="Devo paralelizar?"
            subtitle="Aumentando a eficiência dos núcleos"
            onClick={openWhenToUseParallelismSubject}
          />
          <Card 
            color={colors.background.red.normal}
            banner= {bannerGPU_vs_CPU}
            title= "GPU versus CPU"
            subtitle="Placas gráficas ou Processadores?"
            onClick={openCPU_vs_GPU}
          />
        </Cards>
      )

    const ExpandedSubject = expandedSubjects[currentSubject]

    return <ExpandedSubject onGoBackButtonClick={closeSubject} />
  }

  return (
    <Container>
      <Header>
        <Title>Paralelismo</Title>
        <Text>
          <I>Dividir para conquistar!</I>
        </Text>
        <Text>
          Na computação, o paralelismo é uma estratégia de processamento de dados em que{' '}
          <U>um problema é dividido em partes</U> que serão <B>resolvidas paralelamente</B>, diminuindo em muitos casos
          o tempo de execução das tarefas
        </Text>

        {renderSubjectsNavigator()}

        <ProcessorImage />
      </Header>

      {renderBody()}
    </Container>
  )
}
