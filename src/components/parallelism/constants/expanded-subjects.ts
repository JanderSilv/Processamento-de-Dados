// deps
import React from 'react'

// components
import { FlynnsTaxonomy, WhenToUseParallelism, Concurrent, GPUvsCPU } from '../components'

// enums
import { Subjects } from '../enums'

export const expandedSubjects: Record<Subjects, React.FC<any>> = {
  [Subjects.FLYNNS_TAXONOMY]: FlynnsTaxonomy,
  [Subjects.PARALLELISM_VS_CONCURRENCE]: Concurrent,
  [Subjects.WHEN_TO_USE_PARALLELISM]: WhenToUseParallelism,
  [Subjects.CPU_VS_GPU]: GPUvsCPU, // @todo - mudar pro assunto de comuna
}
