import 'dotenv/config';



const un = process.env.MONGODB_UN;
const pw = process.env.MONGODB_PW;



export default {
    port: 8080,
    dbUri: `mongodb+srv:${un}:${pw}@cluster0.njwfez1.mongodb.net/?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgEd5Yh8MFfjy+jia1jwgG7PyBV64
eMysVInTGuGPlY2m9QvzSMPtfOzMfX/jaknIcR9f7280kIp04JQUd7zHWhXCzmvX
622J8PVCjw1u91rILPcwxJoMpuTdkBL4GxfP+YHle5SAa9TVsQnES9CjILFyjESJ
423trYGSeftEIlr1AgMBAAE=
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgEd5Yh8MFfjy+jia1jwgG7PyBV64eMysVInTGuGPlY2m9QvzSMPt
fOzMfX/jaknIcR9f7280kIp04JQUd7zHWhXCzmvX622J8PVCjw1u91rILPcwxJoM
puTdkBL4GxfP+YHle5SAa9TVsQnES9CjILFyjESJ423trYGSeftEIlr1AgMBAAEC
gYA7Wrn5PnggvOa+ixbN53wZ+yoqdtcaYSHzMrRoDG0NrVBiFC6hRl8v5sFxqtFh
ZGtMusaDewttb5HwZu7ofkR4XQQJsUt81AwMXJyazSU6gHSTylcSP9KvCS3Bl3aj
EchonZOeOdBuVDqAXYbqR/9StcpaXW1OMCNQ3Bf2tdHJIQJBAIs79QRl65zmnU+p
11XQB41VAC93JskBGudQ+b5rJ6mNa3Fd9n52Yhl2OnN/i3Igdo8GyMzvbg9gP5gA
D4GQziMCQQCDahe/I5oWPduTuS+7AIefUj5uyzCM91boTPic4Uwd8GKW52lWS4Ik
T8k4J0L58KNm8Neh+UAw2x6vD5oJf+gHAkBscZJwjoFofyXfOkWBjLmVFrNCROds
fvPZXnRmH0eRA5i/f5PRA5t8gV0dQCX4CdjNpVcYZxOt3iUp2kI5g/NJAkBARLt2
VAAAjqH7Pd708o5hQYSdBKwq1K/hDfusJZbnMW/V4zil5mmwPoDnAHSF7cTMDE84
vMBC5Ha+IMAxkyczAkAwTf3MLMmIE2roXQYpFk8E4tBhdExS6KzqNI0+SPJ7frLv
RCt59cvClpPNYHIwi93PAnHchYlIi8xB4tK1aJlc
-----END RSA PRIVATE KEY-----`
};


