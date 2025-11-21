import requester from "@/store/requester";

export default {
    data() {
        return {
            logoOne: 'WealthOne',
            logoTwo: 'Munnver',
            suppoxtrd: "customerinfo@munnvercapital.com"
        }
    },
    head() {
        return {
            title: 'Munnver Capital',
        }
    },
    computed: {
        sitename() {
            return 'WealthOne Munnver';
        }
    }
}