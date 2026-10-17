import { db } from "./mongo";

const viewsCollection = db.collection<{
    _id: string;
    views: number;
    lastViewedAt: Date;
}>("article_views");

export async function incrementView(articleId: string): Promise<void> {
    try {
        await viewsCollection.updateOne(
            { _id: articleId },
            { $inc: { views: 1 }, $set: { lastViewedAt: new Date() } },
            { upsert: true }
        );
    } catch (error) {
        console.error("Failed to increment article views:", error);
    }
}

export async function getViews(
    articleIds: string[]
): Promise<Record<string, number>> {
    if (articleIds.length === 0) return {};

    try {
        const docs = await viewsCollection
            .find({ _id: { $in: articleIds } })
            .project<{ _id: string; views: number }>({ views: 1 })
            .toArray();

        return docs.reduce<Record<string, number>>((acc, doc) => {
            acc[doc._id] = doc.views;
            return acc;
        }, {});
    } catch (error) {
        console.error("Failed to fetch article views:", error);
        return {};
    }
}
