import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import Link from "next/link"; // Linkをインポート

const PictureCard = () => {
  return (
    <Box display={"flex"} justifyContent={{ xs: "center", md: "flex-start" }}>
      <Link href="/picture" passHref>
        {/* Linkコンポーネントを使用 */}
        <Card
          sx={{
            width: { xs: 300, md: 550 },
            height: { xs: 250, md: 450 },
            pt: 1.5,
            px: 1.5,
            bgcolor: "#f8f8f8",
            textDecoration: "none", // Linkのデフォルトの装飾を取り除く
          }}
        >
          <CardMedia
            sx={{ height: { xs: 200, md: 400 }, width: "100%" }}
            image="/yuse.jpg"
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 0, // MEMO: デフォルトでpaddingがあたっているので0に設定
              py: 1.5,
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box display={"flex"} alignItems={"center"} mb={0.3}>
                <Image
                  src={"/chat-bubble-icon.svg"} // 修正: パスの` `を削除
                  alt={"吹き出しのアイコン"}
                  width={14}
                  height={14}
                />
              </Box>
              <Typography
                fontSize={11}
                fontFamily={"serif"}
                ml={{ xs: 0.7, md: 1 }}
              >
                株式会社PeachTech宣材写真
              </Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                fontSize={11}
                mr={{ xs: 0.3, md: 1 }}
                fontFamily={"serif"}
              >
                Picture More
              </Typography>
              <ArrowRightAltIcon sx={{ color: "#5d5d5d" }} />
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default PictureCard;
