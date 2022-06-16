import {GetNftsDto} from "../../nfts/dto/get-nfts.dto";

export const changeResponse = (response:GetNftsDto[], token: string) => {

    let correctRes = {
        statusCode: 200, data: []
    }

    response.map((value:GetNftsDto) => correctRes.data.push({
        contract: token,
        name: value.data.name,
        tokenId: value.mint,
        blockchain: 'sol',
        imageUrl: value.off_chain_data.image,
        info: {
            name: value.data.name,
            creator: value.data.creators,
            owner: token,
        }
    }))
    return correctRes


};
