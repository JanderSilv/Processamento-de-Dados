// deps
import styled from 'styled-components'

// utils
import { colors } from 'src/components/parallelism/utils'

export const Table = styled.table`
  width: 100%;
  max-width: 45rem;
  border: 1px solid ${colors.background.orange.dark};
  border-spacing: 0;
  border-collapse: collapse;

  tr {
    height: 3rem;
  }

  th,
  td {
    text-align: center;
    padding: 1rem;
  }

  th {
    font-weight: 500;
  }

  td {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .light {
    background: ${colors.background.orange.light};
  }

  .normal {
    background: ${colors.background.orange.normal};
  }

  .dark {
    background: ${colors.background.orange.dark};
  }
`
