import React from 'react';
import styled from 'styled-components';
import { Row, Col, Input } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  MailOutlined,
  SkinOutlined,
  ExpandOutlined,
} from '@ant-design/icons';
import { useHistory, useLocation } from 'umi';
import { useSetState, useUpdateEffect } from 'ahooks';
import MNavMenu from './mNavMenu';

interface StateType {
  path?: string;
}

const NavBox = styled(Row)`
  margin: 0 auto;
  width: 1180px;
`;

const NavPaginationBox = styled(Col)`
  width: 170px;
  text-align: right;

  span:first-child {
    margin-right: 8px;
  }
`;

const NavControlBox = styled(Col)`
  width: calc(100% - 170px);

  input {
    border-radius: 20px;
  }
`;

const SettingIcon = styled(SettingOutlined)`
  cursor: pointer;
  color: ${(props: { path?: string }) =>
    props.path === '/setting' && '#ff4d4f'};
`;
const MailIcon = styled(MailOutlined)`
  cursor: pointer;
`;
const SkinIcon = styled(SkinOutlined)`
  cursor: pointer;
`;
const ExpandIcon = styled(ExpandOutlined)`
  cursor: pointer;
`;

const MNavBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [state, setState] = useSetState<StateType>();

  useUpdateEffect(() => {
    setState({ path: location.pathname });
  }, [location.pathname]);

  return (
    <NavBox>
      <NavPaginationBox>
        <span>
          <LeftOutlined onClick={() => history.go(-1)} />
        </span>
        <span>
          <RightOutlined onClick={() => history.go(1)} />
        </span>
      </NavPaginationBox>
      <NavControlBox>
        <Row justify="space-between">
          <Col span={14}>
            <MNavMenu />
          </Col>
          <Col span={10}>
            <Row justify="space-between">
              <Col span={14}>
                <Input
                  prefix={<SearchOutlined />}
                  placeholder="搜索"
                  style={{ borderRadius: '20px' }}
                />
              </Col>
              <Col span={10}>
                <Row justify="end">
                  <Col span={5}>
                    <SettingIcon
                      path={state.path}
                      onClick={() => history.push('/setting')}
                    />
                  </Col>
                  <Col span={5}>
                    <MailIcon />
                  </Col>
                  <Col span={5}>
                    <SkinIcon />
                  </Col>
                  <Col span={5}>
                    <ExpandIcon />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </NavControlBox>
    </NavBox>
  );
};

export default MNavBar;
