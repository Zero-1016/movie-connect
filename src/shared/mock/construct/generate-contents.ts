import { Content } from "@/shared/api/model";

export function generateContents(numArrays: number): Content[] {
    const base_url = "https://source.unsplash.com/random/300x300/?cat";
    const mockData: Content[] = [];

    for (let i = 0; i < numArrays; i++) {
        const commentData: Content = {
            writer: {
                profileUrl: base_url,
                nickname: `user${i}`,
                email: `user${i}@naver.com`
            },
            id: i,
            content: `user_content user_content user_content user_content user_content`,
            createAt: new Date().toString(),
            updateAt: new Date().toString(),
            isLike: Math.floor(Math.random() * 10) > 5,
            isMine: Math.floor(Math.random() * 10) > 5,
            likeCount: Math.floor(Math.random() * 10)
        };
        mockData.push(commentData);
    }

    return mockData;
}
