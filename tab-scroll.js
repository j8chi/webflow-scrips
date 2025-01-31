(function () {
    /**
     * Webflow Tab Scroll Script
     * 
     * This script scrolls to the active tab content on mobile for a better UX.
     * You can customize the mobile breakpoint and scroll offset using global variables.
     * 
     * Usage in Webflow (add before </body> tag):
     * 
     * <script>
     *     window.WF_MOBILE_WIDTH = 600; // Set mobile width breakpoint (default: 768px)
     *     window.WF_SCROLL_OFFSET = -50; // Adjust scroll position (negative = higher, positive = lower, default: 0px)
     * </script>
     * <script src="https://gist.githubusercontent.com/your-username/hash/raw/webflow-tab-scroll.js"></script>
     * 
     */

    function getMobileWidth() {
        return typeof window.WF_MOBILE_WIDTH !== "undefined" ? window.WF_MOBILE_WIDTH : 768;
    }

    function getScrollOffset() {
        return typeof window.WF_SCROLL_OFFSET !== "undefined" ? window.WF_SCROLL_OFFSET : 0;
    }

    function isMobile() {
        return window.innerWidth <= getMobileWidth();
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".w-tab-link").forEach(tab => {
            tab.addEventListener("click", function () {
                if (isMobile()) {
                    setTimeout(() => {
                        let activeTab = document.querySelector(".w-tab-content .w--tab-active");
                        if (activeTab) {
                            let offset = getScrollOffset();
                            let elementPosition = activeTab.getBoundingClientRect().top + window.scrollY;
                            window.scrollTo({ top: elementPosition + offset, behavior: "smooth" });
                        }
                    }, 300);
                }
            });
        });
    });
})();
