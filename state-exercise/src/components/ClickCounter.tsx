
type CounterProps = {
  increase: () => void
}

const ClickCounter = ({increase}:CounterProps) => {
  return (
    <button
    onClick={increase}
    >
      Click
    </button>
  )
}

export default ClickCounter
