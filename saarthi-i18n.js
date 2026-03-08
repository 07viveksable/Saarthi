/* SAARTHI i18n — English / Hindi / Marathi
   Usage: <script src="saarthi-i18n.js"></script> on any page
   Language saved to localStorage key 'saarthi_lang' (en | hi | mr)
*/
(function () {
    'use strict';

    var T = {
        en: {
            brand: 'Smart Welfare Guide',
            nav_dashboard: 'Dashboard', nav_ask: 'Ask SAARTHI',
            nav_schemes: 'My Schemes', nav_applications: 'Applications',
            nav_documents: 'Documents', nav_stories: 'Success Stories',
            nav_help: 'Help \u0026 Support', nav_settings: 'Settings',
            btn_ask: ' Ask SAARTHI',
            tb_dashboard: 'Dashboard', tb_dashboard_sub: 'Your welfare journey at a glance',
            tb_schemes: 'My Schemes', tb_schemes_sub: '34 schemes matched \u00b7 Start applying now',
            tb_tracker: 'Application Tracker', tb_tracker_sub: '6 active applications in progress',
            tb_docs: 'Document Vault', tb_docs_sub: 'Secure \u00b7 AES-256 \u00b7 Indian servers only',
            tb_stories: 'Success Stories', tb_stories_sub: 'Real people, real impact \u00b7 2,400+ beneficiaries',
            tb_help: 'Help \u0026 Support', tb_help_sub: "We\u2019re here to help \u00b7 Avg. response time 3 min",
            tb_settings: 'Settings', tb_settings_sub: 'Manage your profile, language \u0026 notifications',
            hero_stories: 'Real People, <span>Real Impact</span>',
            hero_help: 'How can we <span>help you?</span>',
            help_placeholder: 'Search for help topics, FAQs\u2026',
            help_search_btn: 'Search',
            auth_signin: 'Sign In Securely \u00a0\u2192',
            auth_register: 'Create My Account \u00a0\u2192',
            cat_title: 'Who are <span>you</span>?',
            cat_sub: 'Choose your primary identity. SAARTHI will personalise the welfare schemes most relevant to you.',
            lang_continue: 'Continue',
            ps_personal: 'Personal Information',
            ps_language: 'Language & Accessibility',
            ps_notif: 'Notifications',
            ps_security: 'Privacy & Security',
            ps_about: 'About & Legal',
            ps_save: 'Save Changes',
            at_approved: 'Approved',
            at_review: 'Under Review',
            at_processing: 'Processing',
            at_docs: 'Documents Verified',
            du_verified: 'Verified',
            du_aadhaar: 'Aadhaar Card',
            du_bank: 'Bank Passbook',
            du_pan: 'PAN Card',
            du_caste: 'Caste Certificate',
            du_income: 'Income Certificate',
            ss_filter_all: 'All Stories',
            ss_filter_women: 'Women',
            ps_cancel: 'Cancel'
        },
        hi: {
            brand: '\u0938\u094d\u092e\u093e\u0930\u094d\u091f \u0915\u0932\u094d\u092f\u093e\u0923 \u0917\u093e\u0907\u0921',
            nav_dashboard: '\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921', nav_ask: 'SAARTHI \u0938\u0947 \u092a\u0942\u091b\u0947\u0902',
            nav_schemes: '\u092e\u0947\u0930\u0940 \u092f\u094b\u091c\u0928\u093e\u090f\u0902', nav_applications: '\u0906\u0935\u0947\u0926\u0928',
            nav_documents: '\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c', nav_stories: '\u0938\u092b\u0932\u0924\u093e \u0915\u0940 \u0915\u0939\u093e\u0928\u093f\u092f\u093e\u0902',
            nav_help: '\u0938\u0939\u093e\u092f\u0924\u093e', nav_settings: '\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938',
            btn_ask: ' SAARTHI \u0938\u0947 \u092a\u0942\u091b\u0947\u0902',
            tb_dashboard: '\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921', tb_dashboard_sub: '\u090f\u0915 \u0928\u091c\u093c\u0930 \u092e\u0947\u0902 \u0906\u092a\u0915\u0940 \u0915\u0932\u094d\u092f\u093e\u0923 \u092f\u093e\u0924\u094d\u0930\u093e',
            tb_schemes: '\u092e\u0947\u0930\u0940 \u092f\u094b\u091c\u0928\u093e\u090f\u0902', tb_schemes_sub: '34 \u092f\u094b\u091c\u0928\u093e\u090f\u0902 \u092e\u093f\u0932\u0940\u0902 \u00b7 \u0905\u092d\u0940 \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0947\u0902',
            tb_tracker: '\u0906\u0935\u0947\u0926\u0928 \u091f\u094d\u0930\u0948\u0915\u0930', tb_tracker_sub: '6 \u0938\u0915\u094d\u0930\u093f\u092f \u0906\u0935\u0947\u0926\u0928 \u092a\u094d\u0930\u0917\u0924\u093f \u092a\u0930 \u0939\u0948\u0902',
            tb_docs: '\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0924\u093f\u091c\u094b\u0930\u0940', tb_docs_sub: '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u00b7 AES-256 \u00b7 \u0915\u0947\u0935\u0932 \u092d\u093e\u0930\u0924\u0940\u092f \u0938\u0930\u094d\u0935\u0930',
            tb_stories: '\u0938\u092b\u0932\u0924\u093e \u0915\u0940 \u0915\u0939\u093e\u0928\u093f\u092f\u093e\u0902', tb_stories_sub: '\u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0932\u094b\u0917, \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u092a\u094d\u0930\u092d\u093e\u0935 \u00b7 2,400+ \u0932\u093e\u092d\u093e\u0930\u094d\u0925\u0940',
            tb_help: '\u0938\u0939\u093e\u092f\u0924\u093e', tb_help_sub: '\u0939\u092e \u092f\u0939\u093e\u0901 \u0939\u0948\u0902 \u00b7 \u0914\u0938\u0924 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u092e\u092f 3 \u092e\u093f\u0928\u091f',
            tb_settings: '\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938', tb_settings_sub: '\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932, \u092d\u093e\u0937\u093e \u0914\u0930 \u0938\u0942\u091a\u0928\u093e\u090f\u0902 \u092a\u094d\u0930\u092c\u0902\u0927\u093f\u0924 \u0915\u0930\u0947\u0902',
            hero_stories: '\u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0932\u094b\u0917, <span>\u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u092a\u094d\u0930\u092d\u093e\u0935</span>',
            hero_help: '\u0939\u092e \u0906\u092a\u0915\u0940 \u0915\u0948\u0938\u0947 <span>\u092e\u0926\u0926 \u0915\u0930\u0947\u0902?</span>',
            help_placeholder: '\u0938\u0939\u093e\u092f\u0924\u093e \u0935\u093f\u0937\u092f, FAQ \u0916\u094b\u091c\u0947\u0902\u2026',
            help_search_btn: '\u0916\u094b\u091c\u0947\u0902',
            auth_signin: '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0938\u093e\u0907\u0928 \u0907\u0928 \u00a0\u2192',
            auth_register: '\u0916\u093e\u0924\u093e \u092c\u0928\u093e\u090f\u0902 \u00a0\u2192',
            cat_title: '<span>\u0906\u092a</span> \u0915\u094c\u0928 \u0939\u0948\u0902?',
            cat_sub: '\u0905\u092a\u0928\u0940 \u092a\u094d\u0930\u092e\u0941\u0916 \u092a\u0939\u091a\u093e\u0928 \u091a\u0941\u0928\u0947\u0902\u0964 SAARTHI \u0906\u092a\u0915\u0947 \u0932\u093f\u090f \u0938\u092c\u0938\u0947 \u0909\u092a\u092f\u0941\u0915\u094d\u0924 \u092f\u094b\u091c\u0928\u093e\u0913\u0902 \u0915\u094b \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u092c\u0928\u093e\u090f\u0917\u093e\u0964',
            lang_continue: '\u091c\u093e\u0930\u0940 \u0930\u0916\u0947\u0902',
            ps_personal: '\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u091c\u093e\u0928\u0915\u093e\u0930\u0940',
            ps_language: '\u092d\u093e\u0937\u093e \u0914\u0930 \u090f\u0915\u094d\u0938\u0947\u0938\u093f\u092c\u093f\u0932\u093f\u091f\u0940',
            ps_notif: '\u0938\u0942\u091a\u0928\u093e\u090f\u0902',
            ps_security: '\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0914\u0930 \u0938\u0941\u0930\u0915\u094d\u0937\u093e',
            ps_about: '\u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0914\u0930 \u0915\u093e\u0928\u0942\u0928\u0940',
            ps_save: '\u092c\u0926\u0932\u093e\u0935 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0915\u0930\u0947\u0902',
            at_approved: '\u0938\u094d\u0935\u0940\u0915\u0943\u0924',
            at_review: '\u0938\u092e\u0940\u0915\u094d\u0937\u093e\u0927\u0940\u0928',
            at_processing: '\u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e\u0927\u0940\u0928',
            at_docs: '\u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924',
            du_verified: '\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924',
            du_aadhaar: '\u0906\u0927\u093e\u0930 \u0915\u093e\u0930\u094d\u0921',
            du_bank: '\u092c\u0948\u0902\u0915 \u092a\u093e\u0938\u092c\u0941\u0915',
            du_pan: '\u092a\u0948\u0928 \u0915\u093e\u0930\u094d\u0921',
            du_caste: '\u091c\u093e\u0924\u093f \u092a\u094d\u0930\u092e\u093e\u0923 \u092a\u0924\u094d\u0930',
            du_income: '\u0906\u092f \u092a\u094d\u0930\u092e\u093e\u0923 \u092a\u0924\u094d\u0930',
            ss_filter_all: '\u0938\u092d\u0940 \u0915\u0939\u093e\u0928\u093f\u092f\u093e\u0902',
            ss_filter_women: '\u092e\u0939\u093f\u0932\u093e\u090f\u0902',
            ps_cancel: '\u0930\u0926\u094d\u0926 \u0915\u0930\u0947\u0902'
        },
        mr: {
            brand: '\u0938\u094d\u092e\u093e\u0930\u094d\u091f \u0915\u0932\u094d\u092f\u093e\u0923 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0915',
            nav_dashboard: '\u0921\u0945\u0936\u092c\u094b\u0930\u094d\u0921', nav_ask: 'SAARTHI \u0932\u093e \u0935\u093f\u091a\u093e\u0930\u093e',
            nav_schemes: '\u092e\u093e\u091d\u094d\u092f\u093e \u092f\u094b\u091c\u0928\u093e', nav_applications: '\u0905\u0930\u094d\u091c',
            nav_documents: '\u0926\u0938\u094d\u0924\u0910\u0935\u091c', nav_stories: '\u092f\u0936\u094b\u0917\u093e\u0925\u093e',
            nav_help: '\u092e\u0926\u0924', nav_settings: '\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u091c',
            btn_ask: ' SAARTHI \u0932\u093e \u0935\u093f\u091a\u093e\u0930\u093e',
            tb_dashboard: '\u0921\u0945\u0936\u092c\u094b\u0930\u094d\u0921', tb_dashboard_sub: '\u090f\u0915\u093e \u0926\u0943\u0937\u094d\u091f\u093f\u0915\u094d\u0937\u0947\u092a\u093e\u0924 \u0915\u0932\u094d\u092f\u093e\u0923 \u092a\u094d\u0930\u0935\u093e\u0938',
            tb_schemes: '\u092e\u093e\u091d\u094d\u092f\u093e \u092f\u094b\u091c\u0928\u093e', tb_schemes_sub: '34 \u092f\u094b\u091c\u0928\u093e \u0938\u093e\u092a\u0921\u0932\u094d\u092f\u093e \u00b7 \u0906\u0924\u093e \u0905\u0930\u094d\u091c \u0915\u0930\u093e',
            tb_tracker: '\u0905\u0930\u094d\u091c \u091f\u094d\u0930\u0945\u0915\u0930', tb_tracker_sub: '6 \u0938\u0915\u094d\u0930\u093f\u092f \u0905\u0930\u094d\u091c \u0938\u0941\u0930\u0942 \u0906\u0939\u0947\u0924',
            tb_docs: '\u0926\u0938\u094d\u0924\u0910\u0935\u091c \u0924\u093f\u091c\u094b\u0930\u0940', tb_docs_sub: '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u00b7 AES-256 \u00b7 \u0915\u0947\u0935\u0933 \u092d\u093e\u0930\u0924\u0940\u092f \u0938\u0930\u094d\u0935\u094d\u0939\u0930',
            tb_stories: '\u092f\u0936\u094b\u0917\u093e\u0925\u093e', tb_stories_sub: '\u0916\u0930\u0947 \u0932\u094b\u0915, \u0916\u0930\u093e \u092a\u094d\u0930\u092d\u093e\u0935 \u00b7 2,400+ \u0932\u093e\u092d\u093e\u0930\u094d\u0925\u0940',
            tb_help: '\u092e\u0926\u0924', tb_help_sub: '\u0906\u092e\u094d\u0939\u0940 \u0907\u0925\u0947 \u0906\u0939\u094b\u0924 \u00b7 \u0938\u0930\u093e\u0938\u0930\u0940 \u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u0935\u0947\u0933 3 \u092e\u093f\u0928\u093f\u091f\u0947',
            tb_settings: '\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u091c', tb_settings_sub: '\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932, \u092d\u093e\u0937\u093e \u0906\u0923\u093f \u0938\u0942\u091a\u0928\u093e \u0935\u094d\u092f\u0935\u0938\u094d\u0925\u093e\u092a\u093f\u0924 \u0915\u0930\u093e',
            hero_stories: '\u0916\u0930\u0947 \u0932\u094b\u0915, <span>\u0916\u0930\u093e \u092a\u094d\u0930\u092d\u093e\u0935</span>',
            hero_help: '\u0906\u092e\u094d\u0939\u0940 \u0915\u0936\u0940 <span>\u092e\u0926\u0924 \u0915\u0930\u0942?</span>',
            help_placeholder: '\u092e\u0926\u0924 \u0935\u093f\u0937\u092f \u0936\u094b\u0927\u093e\u2026',
            help_search_btn: '\u0936\u094b\u0927\u093e',
            auth_signin: '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0938\u093e\u0907\u0928 \u0907\u0928 \u00a0\u2192',
            auth_register: '\u0916\u093e\u0924\u0947 \u0924\u092f\u093e\u0930 \u0915\u0930\u093e \u00a0\u2192',
            cat_title: '\u0924\u0941\u092e\u094d\u0939\u0940 <span>\u0915\u094b\u0923</span> \u0906\u0939\u093e\u0924?',
            cat_sub: '\u0924\u0941\u092e\u091a\u0940 \u092a\u094d\u0930\u093e\u0925\u092e\u093f\u0915 \u0913\u0933\u0916 \u0928\u093f\u0935\u0921\u093e\u0964 SAARTHI \u0924\u0941\u092e\u091a\u094d\u092f\u093e\u0938\u093e\u0920\u0940 \u0938\u0930\u094d\u0935\u093e\u0924 \u092f\u094b\u0917\u094d\u092f \u092f\u094b\u091c\u0928\u093e \u0936\u094b\u0927\u0947\u0932\u0964',
            lang_continue: '\u092a\u0941\u0922\u0947 \u091c\u093e',
            ps_personal: '\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u092e\u093e\u0939\u093f\u0924\u0940',
            ps_language: '\u092d\u093e\u0937\u093e \u0906\u0933\u093f \u0905\u094d\u0915\u094d\u0938\u0947\u0938\u093f\u092c\u093f\u0932\u093f\u091f\u0940',
            ps_notif: '\u0938\u0942\u091a\u0928\u093e',
            ps_security: '\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0906\u0923\u093f \u0938\u0941\u0930\u0915\u094d\u0937\u093e',
            ps_about: '\u092c\u0926\u094d\u0926\u0932 \u0906\u0923\u093f \u0915\u093e\u092f\u0926\u0947\u0936\u0940\u0930',
            ps_save: '\u092c\u0926\u0932 \u0938\u093e\u0920\u0935\u093e',
            at_approved: '\u092e\u0902\u091c\u0942\u0930',
            at_review: '\u0906\u0922\u093e\u0935\u093e\u0916\u093e\u0932\u0940',
            at_processing: '\u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e\u0927\u0940\u0928',
            at_docs: '\u0926\u0938\u094d\u0924\u0910\u0935\u091c \u092a\u0921\u0924\u093e\u0933\u0932\u0947',
            du_verified: '\u092a\u0921\u0924\u093e\u0933\u0932\u0947',
            du_aadhaar: '\u0906\u0927\u093e\u0930 \u0915\u093e\u0930\u094d\u0921',
            du_bank: '\u092c\u0901\u0915 \u092a\u093e\u0938\u092c\u0941\u0915',
            du_pan: '\u092a\u0945\u0928 \u0915\u093e\u0930\u094d\u0921',
            du_caste: '\u091c\u093e\u0924 \u092a\u094d\u0930\u092e\u093e\u0923\u092a\u0924\u094d\u0930',
            du_income: '\u0909\u0924\u094d\u092a\u0928\u094d\u0928\u093e\u091a\u093e \u0926\u093e\u0916\u0932\u093e',
            ss_filter_all: '\u0938\u0930\u094d\u0935 \u0915\u0925\u093e',
            ss_filter_women: '\u092e\u0939\u093f\u0932\u093e',
            ps_cancel: '\u0930\u0926\u094d\u0926 \u0915\u0930\u093e'
        }
    };

    function getLang() { return localStorage.getItem('saarthi_lang') || 'en'; }

    function t(k) {
        var l = getLang();
        return (T[l] && T[l][k] != null) ? T[l][k] : (T.en[k] != null ? T.en[k] : k);
    }

    function setInnerText(el, val) { if (el) el.textContent = val; }

    function apply() {
        var page = window.location.pathname.split('/').pop() || 'dashboard.html';

        // Brand sub-label
        setInnerText(document.querySelector('.sn-sub'), t('brand'));

        // Sidenav links — find text span by parent href
        var navMap = [
            ['dashboard.html', 'nav_dashboard'], ['voice.html', 'nav_ask'],
            ['scheme-results.html', 'nav_schemes'], ['application-tracker.html', 'nav_applications'],
            ['document-upload.html', 'nav_documents'], ['success-stories.html', 'nav_stories'],
            ['help-support.html', 'nav_help'], ['profile-settings.html', 'nav_settings']
        ];
        navMap.forEach(function (pair) {
            var link = document.querySelector('.sn-link[href="' + pair[0] + '"]');
            if (!link) return;
            var sp = link.querySelector('span:not(.sn-ic):not(.sn-badge)');
            if (sp) sp.textContent = t(pair[1]);
        });

        // Topbar voice button text node
        document.querySelectorAll('.tb-voice-btn').forEach(function (btn) {
            btn.childNodes.forEach(function (n) {
                if (n.nodeType === 3 && n.textContent.trim()) n.textContent = t('btn_ask');
            });
        });

        // Topbar title + subtitle (plain text elements only)
        var pageMap = {
            'dashboard.html': ['tb_dashboard', 'tb_dashboard_sub'],
            'scheme-results.html': ['tb_schemes', 'tb_schemes_sub'],
            'application-tracker.html': ['tb_tracker', 'tb_tracker_sub'],
            'document-upload.html': ['tb_docs', 'tb_docs_sub'],
            'success-stories.html': ['tb_stories', 'tb_stories_sub'],
            'help-support.html': ['tb_help', 'tb_help_sub'],
            'profile-settings.html': ['tb_settings', 'tb_settings_sub']
        };
        var pk = pageMap[page];
        if (pk) {
            var tbT = document.querySelector('.tb-title');
            var tbS = document.querySelector('.tb-sub');
            if (tbT) tbT.textContent = t(pk[0]);
            if (tbS && tbS.childElementCount === 0) tbS.textContent = t(pk[1]);
        }

        // Hero titles (innerHTML for colored <span> support)
        var heroMap = {
            'success-stories.html': 'hero_stories',
            'help-support.html': 'hero_help'
        };
        if (heroMap[page]) {
            var ht = document.querySelector('.hero-title');
            if (ht) ht.innerHTML = t(heroMap[page]);
        }

        // Help page: search placeholder + button
        if (page === 'help-support.html') {
            var si = document.getElementById('searchInput');
            if (si) si.placeholder = t('help_placeholder');
            var sb = document.querySelector('.search-bar button');
            if (sb) sb.textContent = t('help_search_btn');
        }

        // category.html
        if (page === 'category.html') {
            var ct = document.querySelector('.page-title');
            if (ct) ct.innerHTML = t('cat_title');
            var cs = document.querySelector('.page-sub');
            if (cs) cs.textContent = t('cat_sub');
        }

        // auth.html
        if (page === 'auth.html') {
            var si2 = document.querySelector('#form-login .cta-btn');
            if (si2) si2.innerHTML = t('auth_signin');
            var rb = document.querySelector('#form-register .cta-btn');
            if (rb) rb.innerHTML = t('auth_register');
        }

        // language.html — continue button
        var cb = document.getElementById('continue-btn');
        if (cb) {
            // keep the SVG arrow child, just update text node
            cb.childNodes.forEach(function (n) {
                if (n.nodeType === 3 && n.textContent.trim()) n.textContent = ' ' + t('lang_continue') + ' ';
            });
        }

        // data-i18n catch-all
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });
    }

    // Public API
    window.SaarthiI18n = {
        setLang: function (code) {
            localStorage.setItem('saarthi_lang', code);
            apply();
        },
        getLang: getLang,
        t: t,
        apply: apply
    };

    // Auto-run
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
