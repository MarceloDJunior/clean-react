import React from 'react'

import { Footer, Header, Icon } from '@/presentation/components'
import { IconName } from '@/presentation/components/icon/icon'

import styles from './survey-list-styles.scss'

export const SurveyList: React.FC = () => {
  return (
    <div className={styles.surveyListWrap}>
      <Header />
      <div className={styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={styles.surveyContent}>
              <Icon iconName={IconName.THUMB_UP} className={styles.iconWrap} />
              <time>
                <span className={styles.day}>22</span>
                <span className={styles.month}>fev</span>
                <span className={styles.year}>2020</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
