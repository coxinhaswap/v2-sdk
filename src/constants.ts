import JSBI from 'jsbi'

export const FACTORY_ADDRESS_UNI_1 = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
export const FACTORY_ADDRESS_56 = '0x70EB89A8d61734697bf237309430B2135d2bE396'
export const FACTORY_ADDRESS_97 = '0x8eED0642C17385297FdDF0B84EcA05C75112a83E'
export const FACTORY_ADDRESS_25 = '0x4000B3f4ad5A33f6c6015FFBEc3E9d6255e9a518' // COXI
export const FACTORY_ADDRESS_338 = '0xd590cC180601AEcD6eeADD9B7f2B7611519544f4' // WRONG


export const INIT_CODE_HASH_UNI_1 = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f';
export const INIT_CODE_HASH_56 = '0xbdc1513f01883597bcb8fd9b264667ad620715125e0d3339a1c6a2ffb80bee5d'
export const INIT_CODE_HASH_97 = '0xe0bbdfcf9b856a3a04fbd17a1a9ce830f1de7d1d57760cd26a478120c69474b8'
export const INIT_CODE_HASH_25 = '0x378bc11c6061f916de4910f5e7f30310318db12f7df2fee41c9e84c9cb84f12b' // COXI
export const INIT_CODE_HASH_338 = '0x7ae6954210575e79ea2402d23bc6a59c4146a6e6296118aa8b99c747afec8acf' // WRONG



export const getFactoryAddress = (chainId: number) => {
    switch (chainId) {
        case 56:
            return FACTORY_ADDRESS_56;
        case 25:
            return FACTORY_ADDRESS_25;
        case 338:
            return FACTORY_ADDRESS_338;
        case 97:
            return FACTORY_ADDRESS_97;
        default:
            return FACTORY_ADDRESS_56;
            // return FACTORY_ADDRESS_UNI_1;
    }
}


export const getInitCodeHash = (chainId: number) => {
    switch (chainId) {
        case 56:
            return INIT_CODE_HASH_56;
        case 25:
            return INIT_CODE_HASH_25;
        case 338:
            return INIT_CODE_HASH_338;
        case 97:
            return INIT_CODE_HASH_97;
        default:
            return INIT_CODE_HASH_56;
            // return INIT_CODE_HASH_UNI_1;
    }
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
