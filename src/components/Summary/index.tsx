import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContent } from './styles'
import { priceFormater } from '../../utils/formater'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContent>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormater.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormater.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#eaf3f0" />
        </header>

        <strong>{priceFormater.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContent>
  )
}
