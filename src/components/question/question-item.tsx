import React from 'react';
import { WrapperBlock } from './wrapper-block';

type QuestionItemProps = {
  name?: string;
  question?: string;
  options: any[];
  className?: string;
  input?: JSX.Element;
};

export function QuestionItem({ name, options, className, input, question }: QuestionItemProps) {
  return (
    <WrapperBlock className={className}>
      <>
        <p className="text-xl font-medium">
          {question || name} <span className="text-red-600">*</span>
        </p>
        <div className="mt-3">
          {options.map((item, index) => {
            const ObjKeys = Object.keys(item);
            return (
              <RenderOption
                key={index}
                keysMapping={ObjKeys}
                optionItem={item}
                className="mt-2 first:mt-0"
              />
            );
          })}
        </div>
        {input}
      </>
    </WrapperBlock>
  );
}

const RenderOption = ({
  keysMapping,
  optionItem,
  className
}: {
  keysMapping: any[];
  optionItem: any;
  className?: string;
}) => {
  return (
    <div className={className}>
      {keysMapping.map((keyItem, index) => {
        return (
          <div key={index} className="text-lg">
            <span className="mr-3">{keyItem}.</span>
            {optionItem[`${keyItem}`]}
          </div>
        );
      })}
    </div>
  );
};
