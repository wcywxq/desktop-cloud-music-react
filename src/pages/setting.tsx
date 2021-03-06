import React, { useMemo } from "react";
import { Row, Col, Checkbox, Space, Radio, Input, Slider } from "antd";
import { AppleFilled, AndroidFilled, WindowsFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useSetState } from "ahooks";
import { RaiseButton, Text, HyperLink } from "@/components/style";

interface ChildrenProps {
  title: string;
  children: React.ReactNode;
}

interface StateType {
  grooveAnimate: boolean;
  groovePlayList: number;
  groovePlaySong: boolean;
  groovePrivateLetter: number;
  noticeCollect: boolean;
  noticeReceive: boolean;
  noticeNewFans: boolean;
  dynamicFri: boolean;
  ranking: number;
  globalKeys: boolean;
  systemKeys: boolean;
  auditionToneQuality: number;
  downloadToneQuality: number;
  cache: number;
  formatName: number;
  fileCategory: number;
  lyricType: number;
  launchLyric: boolean;
}

interface CacheMap {
  [key: string]: string;
}

const TextField = styled(Input)`
  width: 200px;
  border-radius: 6px;
`;

const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

const SettingBox = styled.div`
  border-bottom: ${(props: { bordered?: boolean }) => (props.bordered === false ? 0 : "1px solid #eee")};
  padding-bottom: 24px;
`;

const SettingTitle = styled.h3`
  margin: 16px 0;
`;

const RadioItem = styled(Radio)`
  display: block;
  height: 30px;
  line-height: 30px;
`;

const SettingModule: React.FC<ChildrenProps> = props => {
  const { title, children } = props;

  return (
    <>
      <SettingTitle>{title}</SettingTitle>
      {children}
    </>
  );
};

const cacheMap: CacheMap = {
  1: "512M",
  2: "1G",
  3: "1.5G",
  4: "2G",
  5: "2.5G",
  6: "3G",
  7: "3.5G",
  8: "4G",
  9: "4.5G",
  10: "5G",
  11: "5.5G",
  12: "6G",
  13: "6.5G",
  14: "7G",
  15: "7.5G",
  16: "8G",
  17: "8.5G",
  18: "9G",
  19: "9.5G",
  20: "10G"
};

const Setting: React.FC = () => {
  const [state, setState] = useSetState<StateType>({
    grooveAnimate: true,
    groovePlayList: 1,
    groovePlaySong: true,
    groovePrivateLetter: 1,
    noticeCollect: false,
    noticeReceive: false,
    noticeNewFans: false,
    dynamicFri: false,
    ranking: 1,
    globalKeys: true,
    systemKeys: true,
    auditionToneQuality: 2,
    downloadToneQuality: 2,
    cache: 2,
    formatName: 2,
    fileCategory: 1,
    lyricType: 2,
    launchLyric: false
  });

  const CacheText = useMemo(() => {
    const key = state.cache.toString();
    return cacheMap[key];
  }, [state.cache]);

  const formatter = (value?: number) => {
    const key = value?.toString();
    return key ? `${cacheMap[key]}` : "";
  };

  return (
    <>
      <SettingBox>
        <Row gutter={[8, 8]}>
          <Col span={24}>???????????????????????????????????????????????????320k?????????????????????</Col>
          <Col span={24}>
            <RaiseButton size="small" type="primary" fontSize={12} width={100}>
              ????????????
            </RaiseButton>
          </Col>
        </Row>
      </SettingBox>
      <SettingBox>
        <SettingModule title="??????">
          <MarginBottom>
            <Text>?????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Checkbox checked={state.grooveAnimate} onChange={e => setState({ grooveAnimate: e.target.checked })}>
              <Text>??????????????????</Text>
              <Text color="#a9a9a9">??????????????????????????????</Text>
            </Checkbox>
          </MarginBottom>
          <MarginBottom>
            <Space>
              <Text>???????????????</Text>
              <Text color="#a9a9a9">???????????????</Text>
            </Space>
          </MarginBottom>
          <MarginBottom>
            <Radio.Group onChange={e => setState({ groovePlayList: e.target.value })} value={state.groovePlayList}>
              <RadioItem value={1}>
                <Text>??????????????????????????????????????????????????????????????????????????????</Text>
                <Text color="#a9a9a9">??????????????????</Text>
              </RadioItem>
              <RadioItem value={2}>
                <Text>???????????????????????????????????????????????????????????????</Text>
                <Text color="#a9a9a9">??????????????????</Text>
              </RadioItem>
            </Radio.Group>
          </MarginBottom>
          <MarginBottom>
            <Text>??????????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Checkbox checked={state.groovePlaySong} onChange={e => setState({ groovePlaySong: e.target.checked })}>
              <Text>?????????????????????????????????</Text>
            </Checkbox>
          </MarginBottom>
        </SettingModule>
      </SettingBox>
      <SettingBox>
        <SettingModule title="???????????????">
          <MarginBottom>
            <Text>?????????</Text>
            <Text color="#a9a9a9">??????????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Radio.Group onChange={e => setState({ groovePrivateLetter: e.target.value })} value={state.groovePrivateLetter}>
              <RadioItem value={1}>
                <Text>?????????</Text>
              </RadioItem>
              <RadioItem value={2}>
                <Text>???????????????</Text>
              </RadioItem>
            </Radio.Group>
          </MarginBottom>
          <MarginBottom>
            <Text>?????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <Checkbox checked={state.noticeCollect} onChange={e => setState({ noticeCollect: e.target.checked })}>
                  <Text>???????????????</Text>
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox checked={state.noticeReceive} onChange={e => setState({ noticeReceive: e.target.checked })}>
                  <Text>?????????</Text>
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox checked={state.noticeNewFans} onChange={e => setState({ noticeNewFans: e.target.checked })}>
                  <Text>?????????</Text>
                </Checkbox>
              </Col>
            </Row>
          </MarginBottom>
          <MarginBottom>
            <Text>???????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Checkbox checked={state.dynamicFri} onChange={e => setState({ dynamicFri: e.target.checked })}>
              <Text>?????????????????????????????????</Text>
              <Text color="#a9a9a9">????????????????????????????????????????????????????????????</Text>
            </Checkbox>
          </MarginBottom>
          <MarginBottom>
            <Text>?????????????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Radio.Group onChange={e => setState({ ranking: e.target.value })} value={state.ranking}>
              <RadioItem value={1}>
                <Text>???????????????</Text>
              </RadioItem>
              <RadioItem value={2}>
                <Text>?????????????????????</Text>
              </RadioItem>
              <RadioItem value={3}>
                <Text>???????????????</Text>
              </RadioItem>
            </Radio.Group>
          </MarginBottom>
          <MarginBottom>
            <Text>??????????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Text>??????????????????</Text>
            <RaiseButton size="small" fontSize={12} width={100}>
              ??????
            </RaiseButton>
          </MarginBottom>
        </SettingModule>
      </SettingBox>
      <SettingBox>
        <SettingModule title="?????????">
          <MarginBottom>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text color="#a9a9a9">????????????</Text>
              </Col>
              <Col span={10}>
                <Text color="#a9a9a9">?????????</Text>
              </Col>
              <Col span={7}>
                <Text color="#a9a9a9">???????????????</Text>
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>??????/??????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>?????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>?????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>?????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>?????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>????????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>??????/????????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col span={7}>
                <Text>mini/????????????</Text>
              </Col>
              <Col span={10}>
                <TextField />
              </Col>
              <Col span={7}>
                <TextField />
              </Col>
            </Row>
          </MarginBottom>
          <MarginBottom>
            <Checkbox checked={state.globalKeys} onChange={e => setState({ globalKeys: e.target.checked })}>
              <Text>?????????????????????</Text>
              <Text color="#a9a9a9">???????????????????????????????????????</Text>
              <RaiseButton size="small" fontSize={12} width={100}>
                ????????????
              </RaiseButton>
            </Checkbox>
          </MarginBottom>
          <MarginBottom>
            <Checkbox checked={state.systemKeys} onChange={e => setState({ systemKeys: e.target.checked })}>
              <Text>???????????????????????????</Text>
            </Checkbox>
          </MarginBottom>
        </SettingModule>
      </SettingBox>
      <SettingBox>
        <SettingModule title="????????????">
          <MarginBottom>
            <Text>???????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Space size={32}>
              <Text>??????</Text>
              <Radio.Group onChange={e => setState({ auditionToneQuality: e.target.value })} value={state.auditionToneQuality}>
                <Radio value={1}>
                  <Text>??????</Text>
                </Radio>
                <Radio value={2}>
                  <Text>??????</Text>
                </Radio>
                <Radio value={3}>
                  <Text>??????</Text>
                </Radio>
                <Radio value={4}>
                  <Text>????????????</Text>
                </Radio>
              </Radio.Group>
            </Space>
          </MarginBottom>
          <MarginBottom>
            <Space size={32}>
              <Text>??????</Text>
              <Radio.Group onChange={e => setState({ downloadToneQuality: e.target.value })} value={state.downloadToneQuality}>
                <Radio value={1}>
                  <Text>??????</Text>
                </Radio>
                <Radio value={2}>
                  <Text>??????</Text>
                </Radio>
                <Radio value={3}>
                  <Text>??????</Text>
                </Radio>
                <Radio value={4}>
                  <Text>????????????</Text>
                </Radio>
              </Radio.Group>
            </Space>
          </MarginBottom>
          <MarginBottom>
            <Text>???????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Row align="middle" gutter={[8, 8]}>
              <Col>
                <Text>??????????????????</Text>
              </Col>
              <Col span={8}>
                <Row align="middle" gutter={[8, 0]}>
                  <Col span={20}>
                    <Slider min={1} max={20} value={state.cache} tipFormatter={formatter} onChange={(value: number) => setState({ cache: value })} />
                  </Col>
                  <Col span={4}>
                    <Text>{CacheText}</Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <RaiseButton size="small" fontSize={12} width={100}>
                  ????????????
                </RaiseButton>
              </Col>
            </Row>
          </MarginBottom>
          <MarginBottom>
            <Text>?????????????????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Radio.Group onChange={e => setState({ formatName: e.target.value })} value={state.formatName}>
              <RadioItem value={1}>
                <Text>?????????</Text>
              </RadioItem>
              <RadioItem value={2}>
                <Text>?????? - ?????????</Text>
              </RadioItem>
              <RadioItem value={3}>
                <Text>????????? - ??????</Text>
              </RadioItem>
            </Radio.Group>
          </MarginBottom>
          <MarginBottom>
            <Radio.Group onChange={e => setState({ fileCategory: e.target.value })} value={state.fileCategory}>
              <RadioItem value={1}>
                <Text>???????????????</Text>
              </RadioItem>
              <RadioItem value={2}>
                <Text>?????????????????????</Text>
              </RadioItem>
              <RadioItem value={3}>
                <Text>????????? \ ??????????????????</Text>
              </RadioItem>
            </Radio.Group>
          </MarginBottom>
        </SettingModule>
      </SettingBox>
      <SettingBox>
        <SettingModule title="??????">
          <MarginBottom>
            <Text>?????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Radio.Group onChange={e => setState({ lyricType: e.target.value })} value={state.lyricType}>
              <RadioItem value={1}>
                <Text>????????????</Text>
              </RadioItem>
              <RadioItem value={2}>
                <Text>???????????????</Text>
              </RadioItem>
            </Radio.Group>
          </MarginBottom>
          <MarginBottom>
            <Text>?????????</Text>
          </MarginBottom>
          <MarginBottom>
            <Checkbox checked={state.launchLyric} onChange={e => setState({ launchLyric: e.target.checked })}>
              <Text>????????????</Text>
            </Checkbox>
          </MarginBottom>
        </SettingModule>
      </SettingBox>
      <SettingBox bordered={false}>
        <SettingModule title="?????????????????????">
          <MarginBottom>
            <Space>
              <Text>????????????2.3.2???Build: 832???</Text>
              <RaiseButton size="small" fontSize={12} width={100}>
                ????????????
              </RaiseButton>
              <RaiseButton size="small" fontSize={12} width={100}>
                ????????????
              </RaiseButton>
            </Space>
          </MarginBottom>
          <MarginBottom>
            <Space>
              <Text>?????????????????????</Text>
              <RaiseButton size="small" type="primary" icon={<AppleFilled />} fontSize={12} width={100}>
                iPhone???
              </RaiseButton>
              <RaiseButton size="small" type="primary" icon={<AppleFilled />} fontSize={12} width={100}>
                iPad???
              </RaiseButton>
              <RaiseButton size="small" type="primary" icon={<AndroidFilled />} fontSize={12} width={100}>
                Android???
              </RaiseButton>
              <RaiseButton size="small" type="primary" icon={<WindowsFilled />} fontSize={12} width={100}>
                WP???
              </RaiseButton>
            </Space>
          </MarginBottom>
          <MarginBottom>
            <Space>
              <HyperLink href="https://music.163.com/" target="_blank">
                ???????????????????????????
              </HyperLink>
              <HyperLink href="http://music.163.com/static/guideline.html" target="_blank">
                ???????????????????????????????????????
              </HyperLink>
              <HyperLink href="https://st.music.163.com/official-terms/service" target="_blank">
                ??????????????????
              </HyperLink>
              <HyperLink href="https://st.music.163.com/official-terms/privacy" target="_blank">
                ??????????????????
              </HyperLink>
              <HyperLink href="https://st.music.163.com/official-terms/children" target="_blank">
                ????????????????????????
              </HyperLink>
            </Space>
          </MarginBottom>
        </SettingModule>
      </SettingBox>
    </>
  );
};

export default Setting;
