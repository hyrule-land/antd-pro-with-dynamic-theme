import React from 'react';
import { Tree } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';

const { TreeNode } = Tree;

const TreePreview = ({ size, disabled }) => (
  <PreviewWrapper id="Tree" title="Tree">
    <div className="components tree">
      <div className="component-row">
        <div className="component-col">
          <Tree
            checkable
            size={size}
            disabled={disabled}
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0">
                <TreeNode title="leaf" key="0-0-0-0" />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
        <div className="component-col">
          <Tree
            clasName="component-col"
            size={size}
            disabled={disabled}
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0">
                <TreeNode title="leaf" key="0-0-0-0" />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
        <div className="component-col">
          <Tree
            size={size}
            disabled={disabled}
            clasName="component-col"
            showLine
            defaultExpandedKeys={['0-0-0']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0">
                <TreeNode title="leaf" key="0-0-0-0" />
                <TreeNode title="leaf" key="0-0-0-1" />
                <TreeNode title="leaf" key="0-0-0-2" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title="leaf" key="0-0-1-0" />
              </TreeNode>
              <TreeNode title="parent 1-2" key="0-0-2">
                <TreeNode title="leaf" key="0-0-2-0" />
                <TreeNode title="leaf" key="0-0-2-1" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
      </div>
    </div>
  </PreviewWrapper>
);

export default TreePreview;
