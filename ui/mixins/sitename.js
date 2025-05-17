import requester from "@/store/requester";

export default {
    data() {
        return {
            logoOne: 'MUNNVER',
            logoTwo: 'Capital',
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
            return 'Munnver Capital';
        }
    }
}