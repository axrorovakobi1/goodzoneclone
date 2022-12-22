import "./MiddleHeader.css"
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
function MiddleHeader(){
    return (
        <div className="middle-header-cont">
            <img src="https://goodzone.uz/logogz_ru.svg" alt="" />
            <div className="middle-header-search">
                <input type="text" placeholder="Search"/>
                <button><BiSearch/></button>
            </div>
            <div className="middle-header-icons">
                <div>
                         <AiOutlineHeart style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
                <div>
                         <AiOutlineHeart style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
                <div>
                         <AiOutlineHeart style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
                <div>
                         <AiOutlineHeart style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
            </div>
        </div>
    )

}

export default MiddleHeader