// deps
import React from 'react'

// components
import { FlynnsTaxonomy, Concurrent } from '../components'

// enums
import { Subjects } from '../enums'

export const expandedSubjects: Record<Subjects, React.FC<any>> = {
  [Subjects.FLYNNS_TAXONOMY]: FlynnsTaxonomy,
  [Subjects.MISSOS_SUBJECT]: FlynnsTaxonomy, // @todo - mudar pro assunto de misso
  [Subjects.PARALLELISM_VS_CONCURRENCE]: Concurrent,
  [Subjects.CPU_VS_GPU]: FlynnsTaxonomy, // @todo - mudar pro assunto de comuna
}
