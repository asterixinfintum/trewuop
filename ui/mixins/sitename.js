import requester from "@/store/requester";

export default {
    data() {
        return {
            logoOne: 'WealthOne',
            logoTwo: 'Munnver',
            suppoxtrd: "support@munnvercapital.com"
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