import { GetNftsDto } from '../../nfts/dto/get-nfts.dto';

export const changeResponse = (
  response: GetNftsDto[],
  token: string,
  name: string,
  sort: string,
  page,
): { data: any[]; statusCode: number } => {

  const correctRes = {
    statusCode: 200,
    data: [],
  };

  const arrForSort = [];

  response.map((value: GetNftsDto) =>
    arrForSort.push({
      contract: token,
      name: value.data.name,
      tokenId: value.mint,
      blockchain: 'sol',
      imageUrl: value.off_chain_data.image,
      info: {
        name: value.data.name,
        creator: value.data.creators,
        owner: token,
      },
    }),
  );

  if (name !== '') {

    correctRes.data = arrForSort
      .map((value) => value)
      .find((value) => value.name.includes(name));
    return correctRes;

  } else if (sort === 'asc' && page) {

    correctRes.data = arrForSort
      .map((value) => value)
      .sort((a: any, b: any) => a.name.localeCompare(b.name))
      .slice(page === 1 ? 0 : (page - 1) * 20, page * 20);
    return correctRes;

  } else if (sort === 'desc' && page) {

    correctRes.data = arrForSort
      .map((value) => value)
      .sort((a: any, b: any) => b.name.localeCompare(a.name))
      .slice(page === 1 ? 0 : (page - 1) * 20, page * 20);
    return correctRes;

  } else {

    throw new Error('please write correct API');
  }
};
