import {arch, CpuInfo, cpus, platform, release} from 'node:os'


const getInfoSSOO = () => {

    const OSInfo = [
        {
            platform: platform(),
            release: release(),
            architecture: arch(),
            cpus: cpus()
        }
    ]

    return OSInfo;
}

export default getInfoSSOO;