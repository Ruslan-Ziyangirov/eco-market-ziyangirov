import "./Cards.sass"
import {FC} from "react";

interface Props{
    name:string,
    height: number|string;
    width:number|string;
}


export const Icon: FC<Props> = ({ name, height,width}) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    );
}


export const Cards = () => {
  return (
      <div className="сards-wrapper">
        <div className="card">
            <div className="information-about-card">
                <h3>
                    Пункты сбора
                </h3>
                <p>
                    Посмотри, где в твоем городе<br/>
                    можно сдать вторсырье <br/>
                    на переработку
                </p>
                <button className="btn-arrow">
                    <Icon name="btn-arrow" height={24} width={24}/>
                </button>
            </div>
        </div>

          <div className="card">
              <div className="information-about-card">
                  <h3>
                      Экомаркет
                  </h3>
                  <p>
                      Используй заработанные<br/>
                      экокоины для покупки товаров <br/>
                      из переработанных материалов
                  </p>
                  <button className="btn-arrow">
                      <Icon name="btn-arrow" height={24} width={24}/>
                  </button>
              </div>
          </div>
      </div>
  )
}