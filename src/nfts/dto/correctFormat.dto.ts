export class CorrectFormatDto {
  public statusCode: number;
  public data: [
    {
      contract: string;
      tokenId: string;
      blockchain: string;
      name: string;
      favorite?: boolean;
      imageUrl: string;
      imagePreview?: string;
      imageThumbnail?: string;
      imageOriginal?: null;
      animationUrl?: null;
      animationOriginal?: null;
      info: {
        name: string;
        creator?: string;
        released?: string;
        collection?: string;
        owner: string;
        contract?: null;
      };
    },
  ];
}
