import requester from "@/store/requester";

export default {
    head() {
        return {
            title: 'Munger Capital'
        }
    },
    computed: {
        sitename() {
            const { BASE } = requester;

            if (BASE.includes('mung')) {
                return 'Munger Capital'
            } else {
                return 'Elysium Capital'
            }
        }
    }
}