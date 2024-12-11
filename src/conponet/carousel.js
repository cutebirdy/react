import { Carousel } from 'antd';
const Mycarousel=()=>{
    return (
        <div className="carousel-wrap">
                <Carousel autoplay>
                    <div><img src="/images/img01.jpg" alt='罗熙壁纸1'/></div>
                    <div><img src="/images/img02.jpg" alt='罗熙壁纸2'/></div>
                    <div><img src="/images/img03.jpg" alt='罗熙壁纸3'/></div>
                    <div><img src="/images/img04.jpg" alt='罗熙壁纸4'/></div>
                </Carousel>
            </div>
    );

}
export default Mycarousel;