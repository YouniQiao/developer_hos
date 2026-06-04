---
displayed_sidebar: appDevSidebar
title: "InitBufPool"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-initbufpool
---

## еҠҹиғҪиҜҙжҳҺ

йҖҡиҝҮTpipe::InitBufPoolжҺҘеҸЈеҸҜеҲ’еҲҶеҮәж•ҙеқ—иө„жәҗпјҢж•ҙеқ—TBufPoolиө„жәҗеҸҜд»Ҙз»§з»ӯйҖҡиҝҮTBufPool::InitBufPoolжҺҘеҸЈеҲ’еҲҶжҲҗе°Ҹеқ—иө„жәҗгҖӮ

## еҮҪж•°еҺҹеһӢ

```
template <class T>
__aicore__ inline bool InitBufPool(T& bufPool, uint32_t len)
template <class T, class U>
__aicore__ inline bool InitBufPool(T& bufPool, uint32_t len, U& shareBuf)
```

## еҸӮж•°иҜҙжҳҺ

**иЎЁ1** InitBufPool(T& bufPool, uint32\_t len) еҺҹеһӢе®ҡд№үеҸӮж•°иҜҙжҳҺ

| еҸӮж•°еҗҚз§° | иҫ“е…Ҙ/иҫ“еҮә | еҗ«д№ү |
| --- | --- | --- |
| bufPool | иҫ“е…Ҙ | ж–°еҲ’еҲҶзҡ„иө„жәҗжұ пјҢзұ»еһӢдёәTBufPoolгҖӮ |
| len | иҫ“е…Ҙ | ж–°еҲ’еҲҶиө„жәҗжұ й•ҝеәҰпјҢеҚ•дҪҚдёәByteпјҢйқһ32BytesеҜ№йҪҗдјҡиҮӘеҠЁеҗ‘дёҠиЎҘйҪҗиҮі32BytesеҜ№йҪҗгҖӮ |

**иЎЁ2** InitBufPool(T& bufPool, uint32\_t len, U& shareBuf) еҺҹеһӢе®ҡд№үеҸӮж•°иҜҙжҳҺ

| еҸӮж•°еҗҚз§° | иҫ“е…Ҙ/иҫ“еҮә | еҗ«д№ү |
| --- | --- | --- |
| bufPool | иҫ“е…Ҙ | ж–°еҲ’еҲҶзҡ„иө„жәҗжұ пјҢзұ»еһӢдёәTBufPoolгҖӮ |
| len | иҫ“е…Ҙ | ж–°еҲ’еҲҶиө„жәҗжұ й•ҝеәҰпјҢеҚ•дҪҚдёәByteпјҢйқһ32BytesеҜ№йҪҗдјҡиҮӘеҠЁеҗ‘дёҠиЎҘйҪҗиҮі32BytesеҜ№йҪҗгҖӮ |
| shareBuf | иҫ“е…Ҙ | иў«еӨҚз”Ёиө„жәҗжұ пјҢзұ»еһӢдёәTBufPoolпјҢж–°еҲ’еҲҶиө„жәҗжұ дёҺиў«еӨҚз”Ёиө„жәҗжұ е…ұдә«иө·е§Ӣең°еқҖеҸҠй•ҝеәҰгҖӮ |

## ж”ҜжҢҒзҡ„еһӢеҸ·

Kirin9020зі»еҲ—еӨ„зҗҶеҷЁ

KirinX90зі»еҲ—еӨ„зҗҶеҷЁ

## жіЁж„ҸдәӢйЎ№

* ж–°еҲ’еҲҶзҡ„иө„жәҗжұ дёҺиў«еӨҚз”Ёиө„жәҗжұ зҡ„зү©зҗҶеҶ…еӯҳйңҖиҰҒдёҖиҮҙпјҢдёӨиҖ…е…ұдә«иө·е§Ӣең°еқҖеҸҠй•ҝеәҰгҖӮ
* иҫ“е…Ҙй•ҝеәҰйңҖиҰҒе°ҸдәҺзӯүдәҺиў«еӨҚз”Ёиө„жәҗжұ й•ҝеәҰгҖӮ
* е…¶д»–жіӣз”ЁзәҰжқҹеҸӮиҖғ[InitBufPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-initbufpool)гҖӮ

## иҝ”еӣһеҖј

ж—

## и°ғз”ЁзӨәдҫӢ

ж•°жҚ®йҮҸиҫғеӨ§дё”еҶ…еӯҳжңүйҷҗж—¶пјҢж— жі•дёҖж¬Ўе®ҢжҲҗжүҖжңүж•°жҚ®жҗ¬иҝҗпјҢйңҖиҰҒжӢҶеҲҶжҲҗеӨҡдёӘйҳ¶ж®өи®Ўз®—пјҢжҜҸж¬Ўи®Ўз®—дҪҝз”Ёе…¶дёӯзҡ„дёҖйғЁеҲҶж•°жҚ®пјҢеҸҜд»ҘйҖҡиҝҮTBufPoolиө„жәҗжұ иҝӣиЎҢеҶ…еӯҳең°еқҖеӨҚз”ЁгҖӮжң¬дҫӢдёӯпјҢд»ҺTpipeеҲ’еҲҶеҮәиө„жәҗжұ tbufPool0пјҢtbufPool0дёәsrc0GmеҲҶй…Қз©әй—ҙеҗҺпјҢз»§з»ӯеҲҶй…ҚдәҶиө„жәҗжұ tbufPool1пјҢжҢҮе®ҡtbufPool1дёҺtbufPool2еӨҚз”Ёе№¶еҲҶеҲ«иҝҗз”ЁдәҺз¬¬дёҖгҖҒдәҢиҪ®и®Ўз®—пјҢжӯӨж—¶tbufPool1еҸҠtbufPool2е…ұдә«иө·е§Ӣең°еқҖеҸҠй•ҝеәҰгҖӮ

```
class ResetApi {
public:
    __aicore__ inline ResetApi() {}
    __aicore__ inline void Init(__gm__ uint8_t* src0Gm, __gm__ uint8_t* src1Gm, __gm__ uint8_t* dstGm)
    {
        src0Global.SetGlobalBuffer((__gm__ half*)src0Gm);
        src1Global.SetGlobalBuffer((__gm__ half*)src1Gm);
        dstGlobal.SetGlobalBuffer((__gm__ half*)dstGm);
        pipe.InitBufPool(tbufPool0, 131072);
        tbufPool0.InitBuffer(srcQue0, 1, 65536); // Total src0
        tbufPool0.InitBufPool(tbufPool1, 65536);
        tbufPool0.InitBufPool(tbufPool2, 65536, tbufPool1);
    }
    __aicore__ inline void Process()
    {
        tbufPool1.InitBuffer(srcQue1, 1, 32768);
        tbufPool1.InitBuffer(dstQue0, 1, 32768);
        CopyIn();
        Compute();
        CopyOut();
        tbufPool1.Reset();
        tbufPool2.InitBuffer(srcQue2, 1, 32768);
        tbufPool2.InitBuffer(dstQue1, 1, 32768);
        CopyIn1();
        Compute1();
        CopyOut1();
        tbufPool2.Reset();
        tbufPool0.Reset();
        pipe.Reset();
    }
private:
    __aicore__ inline void CopyIn()
    {
        AscendC::LocalTensor<half> src0Local = srcQue0.AllocTensor<half>();
        AscendC::LocalTensor<half> src1Local = srcQue1.AllocTensor<half>();
        AscendC::DataCopy(src0Local, src0Global, 16384);
        AscendC::DataCopy(src1Local, src1Global, 16384);
        srcQue0.EnQue(src0Local);
        srcQue1.EnQue(src1Local);
    }
    __aicore__ inline void Compute()
    {
        AscendC::LocalTensor<half> src0Local = srcQue0.DeQue<half>();
        AscendC::LocalTensor<half> src1Local = srcQue1.DeQue<half>();
        AscendC::LocalTensor<half> dstLocal = dstQue0.AllocTensor<half>();
        AscendC::Add(dstLocal, src0Local, src1Local, 16384);
        dstQue0.EnQue<half>(dstLocal);
        srcQue0.FreeTensor(src0Local);
        srcQue1.FreeTensor(src1Local);
    }
    __aicore__ inline void CopyOut()
    {
        AscendC::LocalTensor<half> dstLocal = dstQue0.DeQue<half>();
        AscendC::DataCopy(dstGlobal, dstLocal, 16384);
        dstQue0.FreeTensor(dstLocal);
    }
    __aicore__ inline void CopyIn1()
    {
        AscendC::LocalTensor<half> src0Local = srcQue0.AllocTensor<half>();
        AscendC::LocalTensor<half> src1Local = srcQue2.AllocTensor<half>();
        AscendC::DataCopy(src0Local, src0Global[16384], 16384);
        AscendC::DataCopy(src1Local, src1Global[16384], 16384);
        srcQue0.EnQue(src0Local);
        srcQue2.EnQue(src1Local);
    }
    __aicore__ inline void Compute1()
    {
        AscendC::LocalTensor<half> src0Local = srcQue0.DeQue<half>();
        AscendC::LocalTensor<half> src1Local = srcQue2.DeQue<half>();
        AscendC::LocalTensor<half> dstLocal = dstQue1.AllocTensor<half>();
        AscendC::Add(dstLocal, src0Local, src1Local, 16384);
        dstQue1.EnQue<half>(dstLocal);
        srcQue0.FreeTensor(src0Local);
        srcQue2.FreeTensor(src1Local);
    }
    __aicore__ inline void CopyOut1()
    {
        AscendC::LocalTensor<half> dstLocal = dstQue1.DeQue<half>();
        AscendC::DataCopy(dstGlobal[16384], dstLocal, 16384);
        dstQue1.FreeTensor(dstLocal);
    }
private:
    AscendC::TPipe pipe;
    AscendC::TBufPool<AscendC::TPosition::VECCALC> tbufPool0, tbufPool1, tbufPool2;
    AscendC::TQue<AscendC::QuePosition::VECIN, 1> srcQue0, srcQue1, srcQue2;
    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> dstQue0, dstQue1;
    AscendC::GlobalTensor<half> src0Global, src1Global, dstGlobal;
};
extern "C" __global__ __aicore__ void tbufpool_kernel(__gm__ uint8_t* src0Gm, __gm__ uint8_t* src1Gm, __gm__ uint8_t* dstGm)
{
    ResetApi op;
    op.Init(src0Gm, src1Gm, dstGm);
    op.Process();
}
```
