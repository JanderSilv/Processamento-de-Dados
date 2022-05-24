// enums
import { Subjects } from '../enums'

export const subjectColors: Record<Subjects, 'orange' | 'purple' | 'green' | 'red'> = {
  [Subjects.FLYNNS_TAXONOMY]: 'orange',
  [Subjects.WHEN_TO_USE_PARALLELISM]: 'purple',
  [Subjects.PARALLELISM_VS_CONCURRENCE]: 'green',
  [Subjects.CPU_VS_GPU]: 'red',
}
