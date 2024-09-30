import React from 'react'
import styles from './MissionStatement.module.scss'

function MissionStatement() {
  return (
    <div id="mission" className={styles.MissionStatement}>
        <p className={styles.MissionStatementPara}>
          Our music is inspired by Earth’s beautiful outdoor spaces, which is why we’ve teamed up with One Tree Planted to offset the carbon generated from streaming our music.
          <br/><br/>
          We’re calling this initiative 'sustainable streaming,' and we’ll be raising money on our headline tour to plant trees in places that need it most.
          <br/><br/>
          Our end goal is to make everything we do, from touring to music production, carbon neutral. This way we can do our part in stewarding our planet for future generations.
          <br/><br/>
          <strong>One Dollar = One Tree</strong>
          <br/><br/>
          <button 
            className={styles.linkButton} 
            onClick={() => window.open('https://forester.raisely.com/', '_blank')}
          >
            Forester Project
          </button>
        </p>
    </div>
  )
}

export default MissionStatement