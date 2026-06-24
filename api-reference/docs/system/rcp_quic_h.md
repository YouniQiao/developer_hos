---
title: "rcp_quic.h"
upstream_id: "harmonyos-references/rcp_quic_h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:59.323962"
---

# rcp_quic.h

#### 概述

声明quic协议相关的API。提供基本的函数、结构体和const定义。

引用文件： <RemoteCommunicationKit/rcp_quic.h>

库： librcp_quic.so

系统能力： SystemCapability.Collaboration.RemoteCommunication

起始版本： 26.0.0

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [Rcp_QuicSlist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_slist) | 链表数据结构。 |
| struct [Rcp_QuicIpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_ipaddress) | 用于存储IP地址的数据结构。 |
| struct [Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec) | 用于存储二进制内容的数据结构。 |
| struct [Rcp_QuicStreamData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_stream_data) | quic连接中用于接收流式数据的存储结构。 |

#### [h2]宏定义

| 名称 | 描述 |
| --- | --- |
| [RCP_QUIC_IP_MAX_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quic_ip_max_len) 40 | quic连接的IP地址的最大长度。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void [Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) | quic连接实例的类型。 |
| typedef void [Rcp_QuicSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicsession) | quic会话的类型，可以管理多个连接实例。 |
| typedef struct [Rcp_QuicSlist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_slist) [Rcp_QuicSlist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicslist) | 链表数据结构。 |
| typedef enum [RCP_QuicIpResolve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicipresolve) [RCP_QuicIpResolve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicipresolve) | 请求DNS解析时使用的IP解析类型。 |
| typedef struct [Rcp_QuicIpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_ipaddress) [Rcp_QuicIpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicipaddress) | 用于存储IP地址的数据结构。 |
| typedef [Rcp_QuicIpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_ipaddress) (*[Rcp_QuicDynamicDnsRuleFunction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicdynamicdnsrulefunction)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, const char *host, uint16_t port) | 自定义DNS解析回调函数，根据主机名和端口返回IP地址。 |
| typedef enum [Rcp_QuicConnOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnopt) | quic连接选项类型，用于配置连接的各种参数和回调函数。 |
| typedef enum [Rcp_QuicStreamOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamopt) | quic流选项类型，用于配置流的各种参数和回调函数。 |
| typedef enum [Rcp_QuicConnInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconninfo) | quic连接信息类型。用于查询连接的各种信息。 |
| typedef enum [Rcp_QuicStreamInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreaminfo) | quic流信息类型。用于查询流的各种信息。 |
| typedef enum [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) | quic请求中可能出现的错误码。 |
| typedef enum [Rcp_QuicStreamDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamdirection) | quic流的方向类型。 |
| typedef enum [Rcp_QuicStreamShutdown](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamshutdown) | quic流的关闭操作的类型。用于指定关闭流的读或写方向。 |
| typedef struct [Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec) [Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quiciovec) | 用于存储二进制内容的数据结构。 |
| typedef struct [Rcp_QuicStreamData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_stream_data) [Rcp_QuicStreamData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamdata) | quic连接中用于接收流式数据的存储结构。 |
| typedef [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) (*[Rcp_QuicConnectionOnCertAuthority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnectiononcertauthority)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, const unsigned char *const *certs, const size_t *certLens, size_t certsCount) | 证书校验的回调函数。在quic建链时，用于自定义校验对端证书。 |
| typedef void (*[Rcp_QuicConnectionOnSessionTicketUpdate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnectiononsessionticketupdate)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, const char *sessionTicket, size_t length) | quic会话票据更新回调函数。在quic会话中票据更新时触发，返回新的票据。仅客户端触发。 |
| typedef void (*[Rcp_QuicConnectionOnConnected](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnectiononconnected)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject) | quic连接成功回调函数。quic连接成功建立时触发该函数。 |
| typedef void (*[Rcp_QuicConnectionOnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnectiononerror)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) errCode, const char *errDetail) | quic连接失败回调函数。quic连接建立失败时触发该函数，返回失败原因。 |
| typedef void (*[Rcp_QuicConnectionOnClosed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnectiononclosed)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject) | quic连接关闭回调函数。quic连接关闭时触发，通知连接已关闭。 |
| typedef void (*[Rcp_QuicConnectionOnStreamInbound](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnectiononstreaminbound)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, uint64_t streamId) | quic连接中入站流回调函数。当quic连接中对端创建流时触发，处理对端发起的流，设置流的选项和回调。 |
| typedef void (*[Rcp_QuicStreamOnEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamonevent)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, uint64_t streamId, [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) errCode, const char *errDetail) | quic连接中流事件回调函数。当quic连接中的流发生事件时触发，用于处理流的状态变化和错误。 |
| typedef uint64_t (*[Rcp_QuicStreamOnReceiveData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamonreceivedata)) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, void *userObject, uint64_t streamId, const [Rcp_QuicStreamData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamdata) *streamData) | quic连接中流数据接收回调函数。当quic连接中接收到流数据时触发，用于处理接收到的数据。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [RCP_QuicIpResolve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicipresolve) { RCP_QUIC_IP_RESOLVE_WHATEVER = 0, RCP_QUIC_IP_RESOLVE_V4, RCP_QUIC_IP_RESOLVE_V6 } | 请求DNS解析时使用的IP解析类型。 |
| [Rcp_QuicConnOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnopt) { RCP_QUIC_CONN_IP_ADDRESS = 0, RCP_QUIC_CONN_IP_RESOLVE, RCP_QUIC_CONN_DNS_FUNCTION, RCP_QUIC_CONN_ON_CONNECTED_FUNCTION, RCP_QUIC_CONN_ON_ERROR_FUNCTION, RCP_QUIC_CONN_ON_CLOSED_FUNCTION, RCP_QUIC_CONN_STREAM_INBOUND_FUNCTION, RCP_QUIC_CONN_CONNECT_TIMEOUT_MS, RCP_QUIC_CONN_IDLE_TIMEOUT_MS, RCP_QUIC_TLS_CERT_AUTHORITY_FUNCTION = 1000, RCP_QUIC_TLS_CERT_AUTHORITY_CONTENT, RCP_QUIC_TLS_SESSION_TICKET_UPDATE_FUNCTION, RCP_QUIC_TLS_SESSION_TICKET_CONTENT, RCP_QUIC_TP_INITIAL_MAX_BIDIRECTIONAL_STREAMS = 2000, RCP_QUIC_TP_INITIAL_MAX_DATA, RCP_QUIC_TP_INITIAL_MAX_STREAMDATA_BIDIRECTIONAL_LOCAL, RCP_QUIC_TP_INITIAL_MAX_STREAMDATA_BIDIRECTIONAL_REMOTE, RCP_QUIC_TP_INITIAL_MAX_STREAMDATA_UNIDIRECTIONAL, RCP_QUIC_TP_INITIAL_MAX_UNIDIRECTIONAL_STREAMS} | quic连接选项类型。 |
| [Rcp_QuicStreamOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamopt) { RCP_QUIC_STREAM_EVENT_FUNCTION = 0, RCP_QUIC_STREAM_DATA_FUNCTION, RCP_QUIC_INBOUND_STREAM_USER_OBJECT, RCP_QUIC_STREAM_SND_BUFFER_SIZE_KB} | quic连接中配置流选项。 |
| [Rcp_QuicConnInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconninfo) { RCP_INFO_CONN_GET_LOCALADDR = 0, RCP_INFO_CONN_GET_PEERADDR, RCP_INFO_CONN_DNS_TIME_MS, RCP_INFO_CONN_CONNECT_TIME_MS, RCP_INFO_CONN_SCID, RCP_INFO_CONN_DCID } | quic连接中的信息类型。 |
| [Rcp_QuicStreamInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreaminfo) { RCP_INFO_STREAM_SND_BUFFER_SIZE_KB = 0 } | quic流中的信息类型。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) { RCP_QUIC_ERROR_CODE_SUCCESS, RCP_QUIC_PERMISSION_DENIED, RCP_QUIC_ERROR_CODE_FAILED, RCP_QUIC_ERROR_CODE_INVALID_PARAM, RCP_QUIC_ERROR_CODE_INVALID_STATE, RCP_QUIC_ERROR_CODE_OUT_OF_MEM, RCP_QUIC_ERROR_CODE_CLOSE_FROM_PEER, RCP_QUIC_ERROR_CODE_HANDSHAKE_TIMEOUT, RCP_QUIC_ERROR_CODE_NETWORK_IDLE_TIMEOUT, RCP_QUIC_ERROR_INVALID_FRAME, RCP_QUIC_ERROR_CODE_SEND_PENDING, RCP_QUIC_ERROR_CODE_FINALIZE_PENDING, RCP_QUIC_ERROR_CODE_NETWORK_UNREACHABLE, RCP_QUIC_ERROR_CODE_ENCRYPT_ERROR, RCP_QUIC_ERROR_CODE_BUFFER_TOO_SMALL, RCP_QUIC_ERROR_CODE_EAGAIN, RCP_QUIC_ERROR_CODE_STREAM_CLOSED, RCP_QUIC_ERROR_CODE_STREAM_RESET_RECEIVED, RCP_QUIC_ERROR_CODE_STREAM_STOP_SENDING_RECEIVED } | quic请求中可能出现的错误码。 |
| [Rcp_QuicStreamDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamdirection) { RCP_QUIC_STREAM_BIDI = 0, RCP_QUIC_STREAM_UNI } | quic流的方向类型。 |
| [Rcp_QuicStreamShutdown](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamshutdown) { RCP_QUIC_STREAM_SHUTDOWN_READ = 1, RCP_QUIC_STREAM_SHUTDOWN_WRITE = 2 } | quic流的关闭操作的类型。用于指定关闭流的读或写方向。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnSetOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnsetopt) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, [Rcp_QuicConnOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconnopt) opt, const void *optVal, uint32_t optLen) | 设置quic连接选项。用于设置连接的各种参数和回调函数。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnGetInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconngetinfo) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, [Rcp_QuicConnInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconninfo) info, void *infoVal, uint32_t *infoLen) | 获取quic连接信息。用于建立quic连接成功后，获取相关quic连接信息。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicStreamSetOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicstreamsetopt) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, uint64_t streamId, [Rcp_QuicStreamOpt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamopt) opt, const void *optVal, uint32_t optLen) | 设置quic连接中流的参数。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicStreamGetInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicstreamgetinfo) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, uint64_t streamId, [Rcp_QuicStreamInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreaminfo) info, void *infoVal, uint32_t *infoLen) | 获取quic连接中streamId对应流的信息。 |
| [Rcp_QuicSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicsession) *[HMS_Rcp_QuicCreateSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quiccreatesession) () | 创建quic会话对象。一个quic会话中可以管理多个quic连接。 |
| void [HMS_Rcp_QuicDestroySession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicdestroysession) ([Rcp_QuicSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicsession) *session) | 销毁quic会话对象。释放quic会话资源。 |
| [Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *[HMS_Rcp_QuicConnCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconncreate) (char *alpn, void *userObject) | 创建quic连接对象。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnConnect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnconnect) ([Rcp_QuicSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicsession) *session, [Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, const char *serverName, uint16_t port) | 发起quic连接握手。握手结果通过连接回调通知。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnDestroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconndestroy) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn) | 销毁quic连接对象。释放quic连接资源。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnStreamOpen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnstreamopen) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, [Rcp_QuicStreamDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamdirection) direction, uint64_t *streamId, void *userObject) | 在quic连接中打开一个quic流。quic连接建立成功后才能打开quic流。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnStreamSend](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnstreamsend) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, uint64_t streamId, const [Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec) *ioVec, uint32_t ioVecCount, bool fin) | 通过quic流发送数据。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnStreamWantRead](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnstreamwantread) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, uint64_t streamId) | 触发quic流数据读取回调。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnStreamReset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnstreamreset) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, uint64_t streamId, uint64_t appErr) | 重置quic流。立即终止流，丢弃所有未发送和已接收的数据。 |
| [Rcp_QuicErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicerrorcode) [HMS_Rcp_QuicConnStreamShutdown](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicconnstreamshutdown) ([Rcp_QuicConn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicconn) *conn, uint64_t streamId, [Rcp_QuicStreamShutdown](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamshutdown) flag, uint64_t appErr) | 关闭连接中streamId对应流的读或写。 |
| [Rcp_QuicStreamDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quicstreamdirection) [HMS_Rcp_QuicStreamGetDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicstreamgetdirection) (uint64_t streamId) | 获取quic流的方向类型。 |
| void [HMS_Rcp_QuicFreeSlist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_quicfreeslist) ([Rcp_QuicSlist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_slist) *list) | 释放[Rcp_QuicSlist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_slist)链表，释放链表中的所有节点和数据。 |
