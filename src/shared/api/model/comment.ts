export type  Comment = {
    img_url: string;
    id: string;
    username: string;
    comment: string;
    create_at: Date;
}

export function generateMockComments(numArrays: number): Comment[] {
    const base_url = "https://source.unsplash.com/random/300x300/?cat";
    const mockData: Comment[] = [];

    for (let i = 0; i < numArrays; i++) {
        const commentData: Comment = {
            img_url: base_url,
            id: `comment_${i}`,
            username: `user${i}`,
            comment: `This is a sample comment ${i}`,
            create_at: new Date(),
        };
        mockData.push(commentData);
    }

    return mockData;
}
