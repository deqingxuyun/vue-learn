import SockJS from "sockjs-client";
import Stomp from "stompjs";

export class stompScoket {
    constructor() {
        this.stompClient = null,
        this.socket = null;
    };

    /*
     *@description:初始化链接,拿到对象
     *@author: yxd
     *@date: 2019-12-04 14:34:06
    */
    stompInit(url) {
        let self = this;
        //建立连接对象（还未发起连接）
        // this.socket = new SockJS(url);  // 路径
       
        self.stompClient = Stomp.over(self.socket);
        console.log('9999999999999999999999');
    }
    /*
     *@description:建立链接
     *@parma object  服务端验证信息对象
     *@author: yxd
     *@date: 2019-12-04 14:46:44
    */
    stompConnect(obj,updateCallback) {
        let self = this;
            if (self.stompClient !== null) {
                //ob应该是第一个参数，暂时test
                self.stompClient.connect({
                    name: 'test' // 携带客户端信息
                }, (frame) => {
                    console.log(frame);
                    self.stompSubscribe('',updateCallback);
                }, (err) => {
                    console.log(err);
                })
            } else {
                console.warn('stompClient not init');
            }

    }
    /*
     *@description:订阅消息
     *@author: yxd
     *@date: 2019-12-04 14:52:03
    */
    stompSubscribe(obj,updateCallback) {
        let self = this;
        if (self.stompClient !== null) {
            //url应该订阅的，暂时test
            self.stompClient.subscribe('/topic/notice', function (response) {
                let returnData = JSON.parse(response.body);
                updateCallback(returnData);
                console.info(returnData);
            });
        } else {
            console.warn('stompClient not init');
        }

    }
    /*
     *@description:发送消息
     *@author: yxd
     *@date: 2019-12-04 15:07:07
    */
    stompSend(message) {
        let self = this;
        self.stompClient.send("/app/hello", {}, JSON.stringify({ 'name': message }));
    }
}