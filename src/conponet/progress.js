import { Progress, Button } from "antd";
import {MinusCircleOutlined,PlusCircleOutlined}from '@ant-design/icons'
import { useState } from "react";
const ButtonGroup = Button.Group
const Myprogress = () => {
    const [percent, setPercent] = useState(0)
    function handleIncrease() {
        var mypercent = percent + 10
        if (mypercent > 100) {
            mypercent = 100
        }
        setPercent(mypercent)

    }
    function handleDecrease() {
        var mypercent = percent - 10
        if (mypercent < 0) {
            mypercent = 0
        }
        setPercent(mypercent)
    }
    return (
        <div className="progress-wrap">
            <Progress percent={percent} format={(percent) => `${percent} %`}/>
            <Progress type="circle" percent={percent} size={200} format={(percent) => `${percent} %`}/>
            <ButtonGroup>
                <Button type="ghost" onClick={handleDecrease} icon={<MinusCircleOutlined />} />
                <Button type="ghost" onClick={handleIncrease} icon={<PlusCircleOutlined />} />
            </ButtonGroup>
            <span>点击按钮可以看到进度条的变化</span>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
            <Progress type="circle" percent={75} size={200}/>
            <Progress type="circle" percent={70} status="exception" size={200}/>
            <Progress type="circle" percent={100} size={200}/>


        </div>
    );


}
export default Myprogress;