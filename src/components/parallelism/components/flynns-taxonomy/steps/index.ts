import { IntroStep } from './intro'
import { MIMDStep } from './mimd'
import { MISDStep } from './misd'
import { SIMDStep } from './simd'
import { SISDStep } from './sisd'

export const steps = [IntroStep(), SISDStep(), SIMDStep(), MISDStep(), MIMDStep()]
