import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return(
<div className={styles.comment}>
   <img src="https://github.com/filipedeschamps.png"/>
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Filipe Deschamps</strong>
            
            <time title="16 de Agosto as 11:00" dateTime="2022-16-08 11:00:00">Cerca de 01hr atrás</time>

          </div>

          <button title="Deletar comentário">
            <Trash size={20}/>
          </button>

        </header>
        <p>Muito bom Filipe, parabéns!</p>

      </div>

    <footer>
       <button>
          <ThumbsUp />
          Aplaudir 
         <span> 20</span>
      </button>
    </footer>
  </div>

</div>
)
}