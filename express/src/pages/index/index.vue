<template>
    <view class="content">
		<tui-modal :show="true"  title="提示" content="确定退出登录吗？"></tui-modal>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: "Hello",
            show: true,
            pwdArr: "",
            inputvalue1: [],
            card: {
                title: {
                    text: "CSDN云计算",
                },
                tag: {
                    text: "1小时前",
                },
                header: {
                    bgcolor: "#F7F7F7",
                    line: true,
                },
            },
        };
    },
    onLoad() {},
    methods: {},
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
