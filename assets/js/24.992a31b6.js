(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{305:function(e,a,t){"use strict";t.r(a);var s=t(14),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"almacare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almacare"}},[e._v("#")]),e._v(" AlmaCare")]),e._v(" "),t("p",[e._v("This AlmaCare Guide guide describes "),t("a",{attrs:{href:"https://tuxcare.com/almacare",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaCare"),t("OutboundLink")],1),e._v(" and how to set it up on your AlmaLinux system.")]),e._v(" "),t("h2",{attrs:{id:"what-is-almacare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-almacare"}},[e._v("#")]),e._v(" What is AlmaCare?")]),e._v(" "),t("p",[e._v("AlmaCare is a comprehensive support solution designed for organizations using Enterprise Linux, such as AlmaLinux. It caters to organizations that value stability and reliability, preferring to deploy and run their applications without the need for frequent OS upgrades. With a long lifecycle of 16 years, AlmaCare ensures extended support for their applications until the hardware is decommissioned.")]),e._v(" "),t("p",[e._v("AlmaCare offers the following extensions to enhance its support capabilities:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("CyberSecurity extension")]),e._v(": Provides automation to infrastructure with rapid security updates using live patching for critical components such as the kernel, openssl, and glibc. It ensures compliance with organization's security requirements without burdening teams.")]),e._v(" "),t("li",[t("strong",[e._v("FIPS extension")]),e._v(": Designed for regulated organizations, it enables compliance with the US government FIPS data protection standard. AlmaCare ensures FIPS 140 compliance and delivers tailored security updates for maintaining security while meeting regulatory standards.")]),e._v(" "),t("li",[t("strong",[e._v("Enhanced support")]),e._v(": Goes beyond application support and includes additional services such as consulting and configuration assistance. This comprehensive support package caters to the diverse needs of organizations using Enterprise Linux.")])]),e._v(" "),t("p",[e._v("With these extensions, AlmaCare empowers organizations to secure their systems, comply with regulations, and receive comprehensive support to optimize their operations.")]),e._v(" "),t("p",[e._v("Learn more at "),t("a",{attrs:{href:"https://tuxcare.com/almacare",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tuxcare.com/almacare"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux 8 or AlmaLinux 9 operating system")]),e._v(" "),t("li",[e._v("x86_64 or aarch64 architecture")]),e._v(" "),t("li",[e._v("AlmaCare license key (should be obtained from "),t("a",{attrs:{href:"https://portal.tuxcare.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("portal.tuxcare.com"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Internet access")])]),e._v(" "),t("h2",{attrs:{id:"installing-almacare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-almacare"}},[e._v("#")]),e._v(" Installing AlmaCare")]),e._v(" "),t("p",[e._v("To install AlmaCare you need to install the "),t("code",[e._v("almacare-release")]),e._v(" package first. This package contains the AlmaCare repo definitions, TuxCare GPG key and the "),t("code",[e._v("almacarectl")]),e._v(" setup tool. Run the following as root:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# dnf install https://repo.tuxcare.com/almacare/almacare-release-latest-$(rpm --eval %almalinux).noarch.rpm\n")])])]),t("p",[e._v("The second step is to activate your AlmaCare license on the system. You should run the "),t("code",[e._v("almacarectl")]),e._v(" tool as root with your AlmaCare license key provided as a command line argument:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# almacarectl --license-key AC-XXXXXXXXXXXXXXXXXXXXXXXX\n")])])]),t("p",[e._v("This tool will do the following:")]),e._v(" "),t("ol",[t("li",[e._v("Check your OS and architecture")]),e._v(" "),t("li",[e._v("Check your license key for validity and purchased extensions")]),e._v(" "),t("li",[e._v("Check if your system is already registered")]),e._v(" "),t("li",[e._v("Register to CloudLinux Network")]),e._v(" "),t("li",[e._v("Obtain a token to access the restricted AlmaCare repos")]),e._v(" "),t("li",[e._v("Enable the AlmaCare Updates repo")]),e._v(" "),t("li",[e._v("Switch the default AlmaLinux repos to use https://repo.tuxcare.com")]),e._v(" "),t("li",[e._v("Import the TuxCare GPG key")])]),e._v(" "),t("p",[e._v("After installation you'll see the following message:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("AlmaCare installed successfully\n")])])]),t("p",[e._v("This means your system is registered and ready to receive updates from TuxCare.")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),t("p",[e._v("If during installation something goes wrong then the "),t("code",[e._v("almacarectl")]),e._v(" tool will show an error message and suggest how to handle it. For example, if your system is already registered you'll receive the following message:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("This server already has an AlmaCare token installed\nTo force re-registration, please run the script with --force\n")])])]),t("p",[e._v("Then you will have to run "),t("code",[e._v("almacarectl")]),e._v(" like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# almacarectl --license-key AC-XXXXXXXXXXXXXXXXXXXXXXXX --force\n")])])])]),t("h2",{attrs:{id:"the-almacare-cybersecurity-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-almacare-cybersecurity-extension"}},[e._v("#")]),e._v(" The AlmaCare Cybersecurity Extension")]),e._v(" "),t("p",[e._v("The AlmaCare cybersecurity extension, is a powerful solution for robust security patching in AlmaLinux systems. This extension delivers rapid security updates and live patching capabilities specifically designed for the kernel and critical components, guaranteeing continuous protection against vulnerabilities without the need for disruptive reboots or maintenance windows. With AlmaCare's cybersecurity add-on, organizations can maintain a highly secure environment while optimizing resource allocation and minimizing potential risks.")]),e._v(" "),t("p",[e._v("Through live patching, critical system components like openssl and glibc can be patched in real-time, ensuring the entire organization remains shielded from critical vulnerabilities. This approach, based on "),t("a",{attrs:{href:"https://tuxcare.com/enterprise-live-patching-services/kernelcare-enterprise/",target:"_blank",rel:"noopener noreferrer"}},[e._v("KernelCare technology"),t("OutboundLink")],1),e._v(", significantly reduces the attack surface, providing enhanced protection for sensitive data and critical systems. Moreover, the add-on streamlines the patching process by addressing all vulnerabilities, eliminating the need for time-consuming risk assessments and extensive back-and-forth coordination between security and IT teams.")]),e._v(" "),t("p",[e._v("The AlmaCare cybersecurity add-on empowers organizations to effortlessly comply with security requirements and industry standards by automating the patching process. This automation removes the burden of manually analyzing and prioritizing CVEs, allowing security teams to focus on strategic initiatives rather than engaging in repetitive and time-intensive tasks. With its unparalleled convenience and robust functionality, the cybersecurity add-on equips organizations with the tools necessary to efficiently and effectively safeguard their AlmaLinux systems.")]),e._v(" "),t("h3",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("The Cybersecurity extension is installed automatically based on the license key provided. Its license key starts with "),t("em",[e._v("ACCS-")]),e._v(". So if you provide such key during AlmaCare installation you see the following message:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Your license key includes the Cybersecurity extension. Setting up...\n")])])]),t("p",[e._v("The following additional steps are automatically performed by the installer:")]),e._v(" "),t("ol",[t("li",[e._v("Download the KernelCare installer")]),e._v(" "),t("li",[e._v("Install and enable KernelCare on your system")]),e._v(" "),t("li",[e._v("Install a token for access to the live patching servers")]),e._v(" "),t("li",[e._v("Enable the AlmaCare Cybersecurity repo")])]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),t("p",[e._v("If you want to enable Cybersecurity extension on the system that already has a basic AlmaCare subscription, just run "),t("code",[e._v("almacarectl")]),e._v(" with "),t("code",[e._v("--force")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# almacarectl --license-key ACCS-XXXXXXXXXXXXXXXXXXXXXXXX --force\n")])])])]),t("h4",{attrs:{id:"enabling-rapid-security-updates-for-userspace-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-rapid-security-updates-for-userspace-components"}},[e._v("#")]),e._v(" Enabling rapid security updates for userspace components")]),e._v(" "),t("p",[e._v("To enable rapid security updates with live patching for critical userspace components such as "),t("code",[e._v("glibc")]),e._v(" and "),t("code",[e._v("openssl")]),e._v(" use the following commands to enable LibCare and periodic updates:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# kcarectl --enable-libcare\n# libcare-cron init\n")])])]),t("h3",{attrs:{id:"using-the-almacare-cybersecurity-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-almacare-cybersecurity-extension"}},[e._v("#")]),e._v(" Using the AlmaCare Cybersecurity extension")]),e._v(" "),t("p",[e._v("After installation you can verify that your system has access to the KernelCare live patching by running:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# kcarectl -u\n")])])]),t("p",[e._v("You should get message like below, and the system is now receiving kernel security updates as live patches.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Downloading updates\nPatch level 1 applied. Effective kernel version 5.14.0-162.12.1.el9_1\nKernel is safe\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);