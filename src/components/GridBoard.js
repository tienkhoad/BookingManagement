import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Board from './Board';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


const GridBoard = () => {
  const groups = [
    {
      id: 'A',
      title: 'Lầu A',
      boards: [
        { title: 'T-1', roomNumber: 'A301 - Đã đặt', status: 'booked', bedType: '2 Giường view Thành phố', service: 'Dịch vụ đang phục vụ' },
        { title: 'T-2', roomNumber: 'A302 - Đang chờ', status: 'pending', bedType: '2 Giường view Thành phố', service: 'Dịch vụ đang phục vụ' },
        { title: 'T-3', roomNumber: 'A303 - Đang xử lý', status: 'processing', bedType: '2 Giường view Thành phố', service: 'Dịch vụ đang phục vụ' }
      ]
    },
    {
      id: 'B',
      title: 'Lầu B',
      boards: [
        { title: 'T-4', roomNumber: 'B401 - Đã đặt', status: 'booked', bedType: '1 Giường view Biển', service: 'Dịch vụ đang phục vụ' },
        { title: 'T-5', roomNumber: 'B402 - Đang chờ', status: 'pending', bedType: '2 Giường view Thành phố', service: 'Dịch vụ đang phục vụ' },
        { title: 'T-6', roomNumber: 'B403 - Đang xử lý', status: 'processing', bedType: '2 Giường view Thành phố', service: 'Dịch vụ đang phục vụ' }
      ]
    }
  ];

  // const layout = [];
  // groups.forEach((group, groupIndex) => {
  //   group.boards.forEach((board, boardIndex) => {
  //     layout.push({
  //       i: `${group.id}-${boardIndex}`,
  //       x: (boardIndex % 3) * 4,
  //       y: groupIndex * 2,
  //       w: 4,
  //       h: 2,
  //     });
  //   });
  // });


  // return (
  //   <div>
  //     {groups.map((group) => (
  //       <div key={group.id}>
  //         <h2>{group.title}</h2>
  //         <ResponsiveReactGridLayout
  //           className="layout"
  //           layouts={{ lg: layout }}
  //           cols={{ lg: 12 }}
  //           rowHeight={130}
  //           containerPadding={[10, 10]}
  //           autoSize={true}
  //           isResizable={true}
  //         >
  //           {group.boards.map((board, index) => (
  //             <div key={`${group.id}-${index}`} className="grid-item">
  //               <Board
  //                 title={board.title}
  //                 roomNumber={board.roomNumber}
  //                 status={board.status}
  //                 bedType={board.bedType}
  //                 service={board.service}
  //               />
  //             </div>
  //           ))}
  //         </ResponsiveReactGridLayout>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div>
      {groups.map((group) => (
        <div key={group.id}>
          <h2>{group.title}</h2>
          <div className="layout">
            {group.boards.map((board, index) => (
              <div key={`${group.id}-${index}`} className="grid-item">
                <Board
                  title={board.title}
                  roomNumber={board.roomNumber}
                  status={board.status}
                  bedType={board.bedType}
                  service={board.service}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridBoard;
