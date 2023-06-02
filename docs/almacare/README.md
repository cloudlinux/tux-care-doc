# AlmaCare

This AlmaCare Guide guide describes [AlmaCare](https://tuxcare.com/almacare) and how to set it up on your AlmaLinux system.

## What is AlmaCare?

AlmaCare is a comprehensive support solution designed for organizations using Enterprise Linux, such as AlmaLinux. It caters to organizations that value stability and reliability, preferring to deploy and run their applications without the need for frequent OS upgrades. With a long lifecycle of 16 years, AlmaCare ensures extended support for their applications until the hardware is decommissioned.

AlmaCare offers the following extensions to enhance its support capabilities:
 * **CyberSecurity extension**: Provides automation to infrastructure with rapid security updates using live patching for critical components such as the kernel, openssl, and glibc. It ensures compliance with organization's security requirements without burdening teams.
 * **FIPS extension**: Designed for regulated organizations, it enables compliance with the US government FIPS data protection standard. AlmaCare ensures FIPS 140 compliance and delivers tailored security updates for maintaining security while meeting regulatory standards.
 * **Enhanced support**: Goes beyond application support and includes additional services such as consulting and configuration assistance. This comprehensive support package caters to the diverse needs of organizations using Enterprise Linux.

With these extensions, AlmaCare empowers organizations to secure their systems, comply with regulations, and receive comprehensive support to optimize their operations.

Learn more at [https://tuxcare.com/almacare](https://tuxcare.com/almacare).

## Requirements

* AlmaLinux 8 or AlmaLinux 9 operating system
* x86_64 or aarch64 architecture
* AlmaCare license key (should be obtained from [portal.tuxcare.com](https://portal.tuxcare.com))
* Internet access

## Installing AlmaCare

To install AlmaCare you need to install the `almacare-release` package first. This package contains the AlmaCare repo definitions, TuxCare GPG key and the `almacarectl` setup tool. Run the following as root:
```
# dnf install https://repo.tuxcare.com/almacare/almacare-release-latest-$(rpm --eval %almalinux).noarch.rpm
```
The second step is to activate your AlmaCare license on the system. You should run the `almacarectl` tool as root with your AlmaCare license key provided as a command line argument:
```
# almacarectl --license-key AC-XXXXXXXXXXXXXXXXXXXXXXXX
```
This tool will do the following:
1. Check your OS and architecture
2. Check your license key for validity and purchased extensions
3. Check if your system is already registered
4. Register to CloudLinux Network
5. Obtain a token to access the restricted AlmaCare repos
6. Enable the AlmaCare Updates repo
7. Switch the default AlmaLinux repos to use https://repo.tuxcare.com
8. Import the TuxCare GPG key

After installation you'll see the following message:
```
AlmaCare installed successfully
```
This means your system is registered and ready to receive updates from TuxCare.
:::warning
If during installation something goes wrong then the `almacarectl` tool will show an error message and suggest how to handle it. For example, if your system is already registered you'll receive the following message:
```
This server already has an AlmaCare token installed
To force re-registration, please run the script with --force
```
Then you will have to run `almacarectl` like this:
```
# almacarectl --license-key AC-XXXXXXXXXXXXXXXXXXXXXXXX --force
```
:::

## The AlmaCare Cybersecurity Extension

The AlmaCare cybersecurity extension, is a powerful solution for robust security patching in AlmaLinux systems. This extension delivers rapid security updates and live patching capabilities specifically designed for the kernel and critical components, guaranteeing continuous protection against vulnerabilities without the need for disruptive reboots or maintenance windows. With AlmaCare's cybersecurity add-on, organizations can maintain a highly secure environment while optimizing resource allocation and minimizing potential risks.

Through live patching, critical system components like openssl and glibc can be patched in real-time, ensuring the entire organization remains shielded from critical vulnerabilities. This approach, based on [KernelCare technology](https://tuxcare.com/enterprise-live-patching-services/kernelcare-enterprise/), significantly reduces the attack surface, providing enhanced protection for sensitive data and critical systems. Moreover, the add-on streamlines the patching process by addressing all vulnerabilities, eliminating the need for time-consuming risk assessments and extensive back-and-forth coordination between security and IT teams.

The AlmaCare cybersecurity add-on empowers organizations to effortlessly comply with security requirements and industry standards by automating the patching process. This automation removes the burden of manually analyzing and prioritizing CVEs, allowing security teams to focus on strategic initiatives rather than engaging in repetitive and time-intensive tasks. With its unparalleled convenience and robust functionality, the cybersecurity add-on equips organizations with the tools necessary to efficiently and effectively safeguard their AlmaLinux systems.

### Installation

The Cybersecurity extension is installed automatically based on the license key provided. Its license key starts with *ACCS-*. So if you provide such key during AlmaCare installation you see the following message:

```
Your license key includes the Cybersecurity extension. Setting up...
```

The following additional steps are automatically performed by the installer:
1. Download the KernelCare installer
2. Install and enable KernelCare on your system
3. Install a token for access to the live patching servers
4. Enable the AlmaCare Cybersecurity repo

:::warning
If you want to enable Cybersecurity extension on the system that already has a basic AlmaCare subscription, just run `almacarectl` with `--force`:
```
# almacarectl --license-key ACCS-XXXXXXXXXXXXXXXXXXXXXXXX --force
```
:::

#### Enabling rapid security updates for userspace components

To enable rapid security updates with live patching for critical userspace components such as `glibc` and `openssl` use the following commands to enable LibCare and periodic updates:
```
# kcarectl --enable-libcare
# libcare-cron init
```

### Using the AlmaCare Cybersecurity extension

After installation you can verify that your system has access to the KernelCare live patching by running:
```
# kcarectl -u
```
You should get message like below, and the system is now receiving kernel security updates as live patches.
```
Downloading updates
Patch level 1 applied. Effective kernel version 5.14.0-162.12.1.el9_1
Kernel is safe
```



