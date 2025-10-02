// Figma API Integration for BluePrinter
export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: Array<{
    type: string;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  }>;
  characters?: string;
  style?: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
  };
}

export class FigmaAPI {
  private accessToken: string;
  private baseURL = 'https://api.figma.com/v1';

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getFile(fileKey: string): Promise<FigmaNode> {
    const response = await fetch(`${this.baseURL}/files/${fileKey}`, {
      headers: {
        'X-Figma-Token': this.accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.document;
  }

  async getImages(fileKey: string, nodeIds: string[]): Promise<Record<string, string>> {
    const response = await fetch(`${this.baseURL}/images/${fileKey}`, {
      method: 'POST',
      headers: {
        'X-Figma-Token': this.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: nodeIds,
        format: 'png',
        scale: 2,
      }),
    });

    if (!response.ok) {
      throw new Error(`Figma Images API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.images;
  }
}

