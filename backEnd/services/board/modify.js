import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    } // 글을 너무 오래써서 쓰다가 시간지나서 로그인 풀리는경우 나오는 코드

    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;

    const reqcuery = req.query;
    const nowview = reqcuery.boardId;
    // const nowview = 1;
    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    // 수정자 확인 코드
    const board = await Board.findOne({
      where: { id: nowview, userId: nowuser.id },
      include: {
        model: Category,
      },
    });
    const channeladmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id, userId: nowuser.id },
    });
    if (!board || !channeladmin) {
      throw new Error("not match user");
    }
    //

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });
    await board.update({
      ...reqbody,
      categoryId: category.id,
    });
    // await Board.update(
    //   board,
    //   { ...reqbody, categoryId: category.id },
    //   {
    //     where: {
    //       id: nowview,
    //     },
    //   }
    // );
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ err: err.message });
  }
};