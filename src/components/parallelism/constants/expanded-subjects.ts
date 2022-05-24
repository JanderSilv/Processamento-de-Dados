// deps
import React from 'react'

// components
import { FlynnsTaxonomy, WhenToUseParallelism } from '../components'

// enums
import { Subjects } from '../enums'

export const expandedSubjects: Record<Subjects, React.FC<any>> = {
  [Subjects.FLYNNS_TAXONOMY]: FlynnsTaxonomy,
  [Subjects.WHEN_TO_USE_PARALLELISM]: WhenToUseParallelism,
  [Subjects.PARALLELISM_VS_CONCURRENCE]: FlynnsTaxonomy, // @todo - mudar pro assunto de riccardo
  [Subjects.CPU_VS_GPU]: FlynnsTaxonomy, // @todo - mudar pro assunto de comuna
}
