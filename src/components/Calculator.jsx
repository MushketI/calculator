import { useState } from "react"
import styles from "./calculator.module.scss"

function Calculator() {
  const [operation, setOperation] = useState("")

  console.log(operation)
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.conclusion}>
          <span>{operation ? operation : 0}</span>
        </div>
        <div className={styles.cal}>
          <div className={styles.numbers}>
            <button
              value={9}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              9
            </button>
            <button
              value={8}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              8
            </button>
            <button
              value={7}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              7
            </button>
            <button
              value={6}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              6
            </button>
            <button
              value={5}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              5
            </button>
            <button
              value={4}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              4
            </button>
            <button
              value={3}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              3
            </button>
            <button
              value={2}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              2
            </button>
            <button
              value={1}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              1
            </button>
            <button
              value={0}
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              0
            </button>
            <button
              value="."
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              .
            </button>
            <button onClick={() => setOperation("")}>CE</button>
          </div>
          <div className={styles.operators}>
            <button
              value="+"
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              +
            </button>
            <button
              value="-"
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              -
            </button>
            <button
              value="/"
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              /
            </button>
            <button
              value="*"
              onClick={(e) => setOperation(operation + e.target.value)}
            >
              *
            </button>
          </div>
        </div>
        <div
          className={styles.equals}
          onClick={() => setOperation(eval(operation))}
        >
          <span>=</span>
        </div>
      </div>
    </div>
  )
}

export default Calculator
