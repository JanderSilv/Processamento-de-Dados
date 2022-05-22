import { IntroStep } from './intro'
import { IndependentMemoryStep } from './memoria-independente'
import { DependentOperationsStep } from './operacoes-dependentes'
import { PreludeStep } from './prelude'

export const steps = [PreludeStep(), IntroStep(), IndependentMemoryStep(), DependentOperationsStep()]
