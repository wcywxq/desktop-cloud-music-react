import React, { useEffect, useState } from 'react';
import { Space, Row, Col } from 'antd';
import {
  LikeOutlined,
  FolderAddOutlined,
  ShareAltOutlined,
  LeftOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { connect, DetailModelState, useParams, useHistory } from 'umi';
import { ConnectState, ConnectProps } from '@/models/connect';
import { VideoPlayer, Text, RaiseButton } from '@/components/style';
import TextArea from '@/components/textArea';

const Box = styled.div`
  width: 550px;
`;

interface Params {
  id: string;
}

interface DetailMvProps extends ConnectProps {
  detail: DetailModelState;
  submitting?: boolean;
}

const DetailMv: React.FC<DetailMvProps> = (props) => {
  const {
    detail: { mv },
    submitting,
    dispatch,
  } = props;

  const { id } = useParams<Params>();
  const history = useHistory();

  const [textArea, setTextArea] = useState('');
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (dispatch) {
      dispatch({ type: 'detail/queryMvDetailAsync', id });
    }
  }, [dispatch, id]);

  return (
    <Box>
      <p>
        <Space>
          <Text size={14}>
            <LeftOutlined onClick={() => history.go(-1)} />
          </Text>
          <Text size={18} bold>
            mv详情
          </Text>
        </Space>
      </p>
      <p>
        <VideoPlayer
          width={550}
          height={310}
          src={mv.mvUrl}
          poster={mv.cover}
          controls
        />
      </p>
      <Text color="#a9a9a9">{mv.artistName}</Text>
      <br />
      <br />
      <p>
        <Space>
          <Text size={20} bold>
            {mv.name}
          </Text>
          <Text size={14}>
            {showDesc ? (
              <CaretUpOutlined onClick={() => setShowDesc(false)} />
            ) : (
              <CaretDownOutlined onClick={() => setShowDesc(true)} />
            )}
          </Text>
        </Space>
      </p>
      <p>
        <Space>
          <Text color="#c9c9c9">发布: {mv.publishTime}</Text>
          <Text color="#c9c9c9">播放: {mv.playCount} 次</Text>
        </Space>
      </p>
      {showDesc && (
        <p>
          <Text>{mv.desc}</Text>
        </p>
      )}
      <Row align="middle" justify="space-between">
        <Col>
          <Space>
            <RaiseButton icon={<LikeOutlined />}>
              赞({mv.likedCount || 0})
            </RaiseButton>
            <RaiseButton icon={<FolderAddOutlined />}>
              收藏({mv.subCount || 0})
            </RaiseButton>
            <RaiseButton icon={<ShareAltOutlined />}>
              分享({mv.shareCount || 0})
            </RaiseButton>
          </Space>
        </Col>
        <Col>
          <Text color="#a9a9a9">举报</Text>
        </Col>
      </Row>
      <br />
      <br />
      <p>
        <Text size={16} bold>
          听友评论
          <Text color="#a9a9a9">（已有{mv.commentCount || 0}条评论）</Text>
        </Text>
      </p>
      <TextArea
        rows={3}
        placeholder="输入评论或@朋友"
        allowClear
        count={140 - textArea.length}
        value={textArea}
        onChange={setTextArea}
      />
    </Box>
  );
};

export default connect(({ detail, loading }: ConnectState) => ({
  detail,
  submitting: loading.effects['detail/queryMvDetailAsync'],
}))(DetailMv);
